/**
* Activitys.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblActivities",

    // migrate:'safe',  // don't update the tables!
migrate:'alter',  // don't update the tables!

    connection:"fcf",


    attributes: {

        // IDActivity : {
        //     type : "integer",
        //     size : 10,
        //     primaryKey : true
        // }, 
        ActivityDescNat : {
            type : "string",
            size : 150
        }, 
        ActivityDescEng : {
            type : "string",
            size : 150
        }, 
        DateActivityStart : {
            type : "datetime"
        }, 
        DateActivityEnd : {
            type : "datetime"
        }, 
        ActivityMemo : {
            type : "string",
            size : 250
        }, 
        IDGroup : {
            type : "string",
            size : 10
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        // CostOfActivity : {
        //     type : "float",
        //     size : 19,4
        // }, 
        TotHrsForActivity : {
            type : "integer",
            size : 5
        }

    }
};

