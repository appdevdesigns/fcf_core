/**
* PersonOldSystem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblPersonsOldSystem",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDPerson : {
            type : "integer",
            size : 10,
            primaryKey : true
        }, 
        IDFamily : {
            type : "integer",
            size : 10
        }, 
        IDAgencyOversite : {
            type : "string",
            size : 10
        }, 
        codeGender : {
            type : "string",
            size : 1
        }, 
        NamePersonFirst : {
            type : "string",
            size : 25
        }, 
        NamePersonLast : {
            type : "string",
            size : 25
        }, 
        NamePersonPreferred : {
            type : "string",
            size : 50
        }, 
        NamePersonFL : {
            type : "string",
            size : 243
        }, 
        NamePersonLF : {
            type : "string",
            size : 243
        }, 
        codeCountryPassport : {
            type : "text"
        }, 
        Email : {
            type : "string",
            size : 50
        }, 
        PhoneMobile : {
            type : "string",
            size : 25
        }, 
        DateBirth : {
            type : "datetime"
        }, 
        IDProject : {
            type : "string",
            size : 5
        }

    }
};

