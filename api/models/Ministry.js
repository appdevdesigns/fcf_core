/**
* Ministry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblMinistries",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDMinistry : {
            type : "integer",
            size : 10,
            primaryKey : true
        }, 
        codeMinistryStatus : {
            type : "string",
            size : 5
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        NameMinistryNat : {
            type : "string",
            size : 50
        }, 
        NameMinistryEng : {
            type : "string",
            size : 50
        }, 
        DateMinistryStarted : {
            type : "datetime"
        }, 
        DateMinistryEnded : {
            type : "datetime"
        }, 
        IDPersonResponsible : {
            type : "integer",
            size : 10
        }, 
        WorkAddressThai : {
            type : "string",
            size : 50
        }, 
        WorkAddressEng : {
            type : "string",
            size : 50
        }, 
        MinistryDisplayName : {
            type : "string",
            size : 243
        }

    }
};

