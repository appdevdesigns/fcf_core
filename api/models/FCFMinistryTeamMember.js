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
        size : 11
    }, 

    "IDService" : {
        type : "integer",
        size : 11,
        primaryKey : true                   // <<---- Appdev Addition
    }, 

    "codeServiceStatus" : {
        type : "string",
        size : 5
    }, 

    "IDProject" : {
        type : "string",
        size : 5
    }, 

    "IDMinistry" : {
        type : "integer",
        size : 11
    }, 

    "DateStartHelps" : {
        type : "datetime"
    }, 

    "DateFinishHelps" : {
        type : "datetime"
    }, 

    "MonthlyCommitmentThai" : {
        type : "string",
        size : 100
    }, 

    "MonthlyCommitmentEng" : {
        type : "string",
        size : 100
    }, 

    "AreasOfHelp" : {
        type : "string",
        size : 50
    }, 

    "AmtTime" : {
        type : "float"
    }, 

    "codeTimeFrame" : {
        type : "string",
        size : 3
    }, 

    "WorkAddressThai" : {
        type : "string",
        size : 50
    }, 

    "WorkAddressEng" : {
        type : "string",
        size : 50
    }, 


  }
};

