/**
* FCFLocation.js
*
* @description :: Predefined locations for Activity Images.
*/

module.exports = {

    tableName:"fcf_location",

    connection:'fcf',

    migrate:'alter',  

    attributes: {

        zipcode :  { type: 'string' },

        latitude:  { type: 'string' },

        longitude: { type:'string' },

        priority:  { type:"integer", size:4, defaultsTo:0, required:true  }, 

        active:    { type:"integer", size:1, defaultsTo:1, required:true  },

        //// 
        //// AppDev Multilingual Extensions:
        ////

        // @hasMany FCFLocationTrans relationship
        // this will pull in the translations using: 
        //      FCFLocation.find().populate('translations')
        translations:{
            collection:'FCFLocationTrans',
            via:'fcflocation'
        }

    },

    // beforeValidate: function(valuesToUpdate, cb) {

    //     if ((valuesToUpdate.date_end == null)
    //         || (valuesToUpdate.date_end == '')
    //         || (valuesToUpdate.date_end == '0000-00-00')) {
    //         delete valuesToUpdate.date_end;
    //     }

    //     cb();
    // }

};