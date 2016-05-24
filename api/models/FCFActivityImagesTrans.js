/**
* FCFActivityImagesTrans.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"fcf_activityimages_trans",

    // connection:"mysql",
    connection:'fcf',

migrate:'alter',  // don't update the tables!

  attributes: {

    caption : { type: 'string' },

    caption_govt : {type: 'string' }
          
        // @hasOne FCFActivityImages reference
        ,fcfactivityimages:{
            model:'FCFActivityImages'
        },

        language_code : {
            type : "string",
            size : 10,
            defaultsTo : "-"
        }

    }
};

