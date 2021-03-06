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



        status:{
            type:'string',
            defaultsTo:'new',
            enum:['new', 'approved', 'denied', 'translated', 'ready', 'updated']
            // 'new'        : just created, waiting for approval
            // 'approved'   : approved, waiting for translation
            // 'translated' : translated waiting for next step
            // 'ready'      : finally ready for use by reports
            // 'updated'    : a change happened, and now waiting for approval again
            // 'denied'     : not approved (either as newly created or updated)
        },


        /*
         * @function toSavedFileName
         *
         * convert our .image from it's temp value to 
         * to a properly formatted value.
         *
         * proper format: [activity.id]_[image.id]_[uuid](_[scaled])
         *  
         */
        toSavedFileName:function( newName ){

            var name = newName || this.image;

            if (name) {
                var parts = name.split('_');
                if (parts.length < 2) {
                    name = [this.activity, this.id,  name].join('_');
                } else {
                    // reconfigure existing name properly
                    var savedName = [this.activity, this.id];
                    parts.forEach(function(p){
                        savedName.push(p);
                    })
                    name = savedName.join('_');
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
            var fields = [ 'id', 'image', 'date', 'status', 'activity' ];
            var self = this;
            fields.forEach(function(field){
                simpleActivity[field] = self[field];
            });

            // transfer caption is available
            if (this.caption) {
                simpleActivity.caption = this.caption;
            }

            // transfer caption is available
            if (this.caption_govt) {
                simpleActivity.caption_govt = this.caption_govt;
            }

            // simple date: yyyy/mm/dd
            if (simpleActivity.date) {
                var month = simpleActivity.date.getMonth();
                var date = simpleActivity.date.getDate();
                var year = simpleActivity.date.getFullYear();
                
                // if date is 1-9 add a leading "0"
                if (date < 10) {
                    date = "0" + date;
                }
                
                // convert month to 01-12 from 0-11
                month++;
                if (month < 10) {
                    month = "0" + month;
                }
                
                date = year + "-" + month + "-" + date;
                
                simpleActivity.date = date;
            }


            // reduce the taggedPeople to a list of [ids]
            var taggedPeopleIDs = [],
                taggedPeopleNames = [];
            if (this.taggedPeople) {
                this.taggedPeople.forEach(function(person){
                    taggedPeopleIDs.push(person.IDPerson);

                    if (person.displayName) {
                        taggedPeopleNames.push(person.displayName(langCode));
                    } else {
                        taggedPeopleNames.push(person.NamePersonFLEng);
                    }
                })
            }
            simpleActivity.taggedPeople = taggedPeopleIDs;
            simpleActivity.taggedPeopleNames = taggedPeopleNames;


            // reduce uploadedBy => { IDPerson, display_name }
            if (this.uploadedBy) {
                simpleActivity.uploadedBy = {
                    IDPerson: this.uploadedBy.IDPerson
                }  

                if (this.uploadedBy.displayName) {
                    simpleActivity.displayName = this.uploadedBy.displayName(langCode)
                } else {
                    
                    simpleActivity.displayName = this.uploadedBy.NamePersonFLEng;
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

