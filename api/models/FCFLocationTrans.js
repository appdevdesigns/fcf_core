/**
* FCFLocationTrans.js
*
* @description :: Translatable Fields for FCFLocation
*/

module.exports = {

    tableName:"fcf_location_trans",

    // connection:"mysql",
    connection:'fcf',

    migrate:'alter',  

    attributes: {

        name             : { type: 'string', required:true },
        addressLine1     : { type: 'string' },
        addressLine2     : { type: 'string' },
        addressLine3     : { type: 'string' },
        city             : { type: 'string' },
        province         : { type: 'string' },
        country          : { type: 'string' },

        // @hasOne FCFLocation reference
        fcflocation:{
            model:'FCFLocation'
        },

        language_code : {
            type : "string",
            size : 10,
            defaultsTo : "-"
        }
    }
};

