/**
* FCFActivityTrans.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    // connection:"mysql",
    connection:'fcf',
    tableName:"fcf_activity_trans",

migrate:'alter',  // don't update the tables!
    attributes: {

        activity_name : { type: 'string' },

        activity_description : { type: 'string' }
          
        // @hasOne FCFActivity reference
        ,fcfactivity:{
            model:'FCFActivity'
        },

        language_code : {
            type : "string",
            size : 10,
            defaultsTo : "-"
        }

    }
};

