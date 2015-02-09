/**
* MinistryTeamMember.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblMinistryTeamMembers",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDService : {
            type : "integer",
            size : 10,
            primaryKey : true
        }, 
        codeServiceStatus : {
            type : "string",
            size : 5
        }, 
        IDPerson : {
            type : "integer",
            size : 10
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        IDMinistry : {
            type : "integer",
            size : 10
        }, 
        codeServiceRole : {
            type : "text"
        }, 
        DateStartHelps : {
            type : "datetime"
        }, 
        DateFinishHelps : {
            type : "datetime"
        }, 
        MonthlyCommitmentThai : {
            type : "string",
            size : 50
        }, 
        MonthlyCommitmentEng : {
            type : "string",
            size : 50
        }, 
        AreasOfHelp : {
            type : "string",
            size : 50
        }, 
        AmtTime : {
            type : "float"
        }, 
        codeTimeFrame : {
            type : "string",
            size : 3
        }, 
        WorkAddressThai : {
            type : "string",
            size : 50
        }, 
        WorkAddressEng : {
            type : "string",
            size : 50
        }

    }
};

