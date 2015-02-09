/**
* FCFActivityImages.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"fcf_activityimages",

    // connection:"mysql",
    connection:'fcf',

migrate:'alter',  // don't update the tables!

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

    }
};

