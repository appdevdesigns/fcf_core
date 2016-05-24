/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblGroups",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDGroup : {
            type : "string",
            size : 10,
            primaryKey : true
        }, 
        GroupNameThai : {
            type : "string",
            size : 50
        }, 
        GroupNameEng : {
            type : "string",
            size : 50
        }, 
        GroupNameThaiShort : {
            type : "string",
            size : 25
        }, 
        GroupNameEngShort : {
            type : "string",
            size : 25
        }, 
        flgHasProjects : {
            type : "integer",
            size : 1
        }, 
        flgIsSendingOrg : {
            type : "integer",
            size : 1
        }, 
        codeMOUType : {
            type : "string",
            size : 5
        }, 
        flgHasMOU : {
            type : "integer",
            size : 1
        }, 
        NameContactPerson : {
            type : "string",
            size : 50
        }, 
        EmailContact : {
            type : "string",
            size : 50
        }, 
        PhoneContact : {
            type : "string",
            size : 50
        }, 
        DateContractExpire : {
            type : "datetime"
        }, 
        MemoNotes : {
            type : "text"
        }

    }
};

