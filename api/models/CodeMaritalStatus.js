/**
* CodeMaritalStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeMaritalStatus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeMaritalStatus : {
            type : "string",
            size : 2,
            primaryKey : true
        }, 

        MaritalStatusDescNat : {
            type : "string",
            size : 20
        }, 

        MaritalStatusDescEng : {
            type : "string",
            size : 255
        }, 

        SortNo : {
            type : "integer",
            size : 10
        }, 

        DateLastUpdated : {
            type : "datetime"
        }

    }
};

