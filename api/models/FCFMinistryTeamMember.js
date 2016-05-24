/**
 * FCFMinistryTeamMember.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!


  tableName:'tblMinistryTeamMembers',


  connection:'fcf',



  attributes: {

    "IDPerson" : {
        type : "integer",
        size : 4
    }, 

    "IDService" : {
        type : "integer",
        size : 4,
        primaryKey : true
    }, 

    "codeServiceStatus" : {
        type : "string",
        size : 1
    }, 

    "IDProject" : {
        type : "string",
        size : 5
    }, 

    "IDMinistry" : {
        type : "integer",
        size : 3
    }, 

    "DateStartHelps" : {
        type : "string",
        size : 10
    }, 

    "DateFinishHelps" : {
        type : "string",
        size : 10
    }, 

    "MonthlyCommitmentThai" : {
        type : "string",
        size : 92
    }, 

    "MonthlyCommitmentEng" : {
        type : "string",
        size : 10
    }, 

    "AreasOfHelp" : {
        type : "string",
        size : 10
    }, 

    "AmtTime" : {
        // type : "?decimal?",
        // size : 3,1
        type : "float"
    }, 

    "codeTimeFrame" : {
        type : "string",
        size : 3
    }, 

    "WorkAddressThai" : {
        type : "string",
        size : 10
    }, 

    "WorkAddressEng" : {
        type : "string",
        size : 10
    }, 


  }
};

