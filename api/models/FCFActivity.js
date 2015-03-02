/**
* FCFActivity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"fcf_activity",

    // connection:"mysql",
    connection:'fcf',

// migrate:'alter',  // don't update the tables!

    attributes: {

        date_start : { type: 'date' },

        date_end : { type: 'date' },

        default_image: {type:'string'},

        // @hasOne Team (FCFMinistry)
        team:{
            model:'FCFMinistry'
        },

        createdBy: {
            model:'FCFPerson'
        },

        approvedBy: {
            model:'FCFPerson'
        },

        objectives: {
            collection:'FCFObjective',
            via:'activities'
        },

        images: {
            collection:'FCFActivityImages',
            via:'activity'
        }
          
        //// 
        //// AppDev Multilingual Extensions:
        ////

        // @hasMany FCFActivityTrans relationship
        // this will pull in the translations using: 
        //      FCFActivity.find().populate('translations')
        ,translations:{
            collection:'FCFActivityTrans',
            via:'fcfactivity'
        },


        // .translate( langCode ) can translate an instance of FCFActivity  
        //                        with the proper labels.
        translate:function(code) {
            return ADCore.model.translate({
                model:this,         // this instance of a Model
                code:code,          // the language code of the translation to use.
                ignore:['fcfactivity']     // don't include this field when translating
            });
        },


        // enable the instance of a model to return the Model Class Object.
        _Klass: function() {
            return FCFActivity;
        }

    }
};

