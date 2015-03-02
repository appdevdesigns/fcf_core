/**
* FCFActivityImages.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"fcf_activityimages",

    connection:'fcf',

// migrate:'alter',  // don't update the tables!

    attributes: {

        /* url to image:  /data/fcf/images/activities/[imagename].jpg */
        image : { type: 'string' },

        date : { type: 'date' },

        // @hasOne FCFPerson reference
        uploadedBy:{
            model:'FCFPerson'
        },

        activity: {
            model:'FCFActivity'
        },


        // @hasMany FCFPersons
        taggedPeople : { 
            collection:'FCFPerson',
            via:'taggedInImages'
        },


        /*
         * @function toSavedFileName
         *
         * convert our .image from it's temp value to 
         * to a properly formatted value.
         *
         *  
         */
        toSavedFileName:function( newName ){

            var name = newName || this.image;

            if (name) {
                var parts = name.split('_');
                if (parts.length < 2) {
                    name = [this.activity, '_', this.id, '_', name].join('');
                } else {
                    // reconfigure existing name properly
                    name = [this.activity, '_', this.id, '_', parts.pop()].join('');
                }
                this.image = name
            }

            return name;
        },



        toClient:function(langCode){

            var simpleActivity = {};
            

            // translate the activity
            if (this.translations) {
                this.translate(langCode);
            }


            // copy over the base fields
            var fields = [ 'id', 'image', 'date', 'activity' ];
            var self = this;
            fields.forEach(function(field){
                simpleActivity[field] = self[field];
            });

            // transfer caption is available
            if (this.caption) {
                simpleActivity.caption = this.caption;
            }

            // simple date: yyyy/mm/dd
            if (simpleActivity.date) {
                simpleActivity.date = simpleActivity.date.toISOString().split('T')[0];
            }


            // reduce the taggedPeople to a list of [ids]
            var taggedPeopleIDs = [];
            if (this.taggedPeople) {
                this.taggedPeople.forEach(function(person){
                    taggedPeopleIDs.push(person.IDPerson);
                })
            }
            simpleActivity.taggedPeople = taggedPeopleIDs;
            
            

            // reduce uploadedBy => { IDPerson, display_name }
            if (this.uploadedBy) {
                simpleActivity.uploadedBy = {
                    IDPerson: this.uploadedBy.IDPerson,
                    displayName: this.uploadedBy.displayName(langCode)
                }
            }

            // our db table only stores the file name, translate this into a url for the client.
            simpleActivity.image = FCFCore.paths.forURL( FCFCore.paths.images.activities(simpleActivity.image));


            return simpleActivity;
        },
          

        //// 
        //// AppDev Multilingual Extensions:
        ////

        // @hasMany FCFActivityImagesTrans relationship
        // this will pull in the translations using: 
        //      FCFActivityImages.find().populate('translations')
        translations:{
            collection:'FCFActivityImagesTrans',
            via:'fcfactivityimages'
        },


        // .translate( langCode ) can translate an instance of FCFActivityImages  
        //                        with the proper labels.
        translate:function(code) {
            return ADCore.model.translate({
                model:this,         // this instance of a Model
                code:code,          // the language code of the translation to use.
                ignore:['fcfactivityimages']     // don't include this field when translating
            });
        },


        // enable the instance of a model to return the Model Class Object.
        _Klass: function() {
            return FCFActivityImages;
        }

    },


    /*
     * toClientList
     *
     * given a list of ActivityImages, return a list 
     * that has it's data simplified for the client-side
     * use.
     */
    toClientList:function(list, langCode) {


        var simpleList = [];

        list.forEach(function(activity){

            simpleList.push(activity.toClient(langCode));
            
        })

        return simpleList;

    }
};

