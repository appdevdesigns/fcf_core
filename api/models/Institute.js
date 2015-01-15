/**
* Institute.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName:"tblInstitute",
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!


  connection:"fcf",


  attributes: {

    IDInstitute : {
        type : "string",
        size : 5,
        primaryKey : true
    }, 
    flg2UpdateImport : {
        type : "integer",
        size : 1
    }, 
    codeStep : {
        type : "integer",
        size : 5
    }, 
    codeSyncDataChurch : {
        type : "string",
        size : 2
    }, 
    codeSyncDataChurchOld : {
        type : "string",
        size : 2
    }, 
    codeInstituteType : {
        type : "string",
        size : 4
    }, 
    IDPak : {
        type : "string",
        size : 2
    }, 
    Zone : {
        type : "string",
        size : 20
    }, 
    IDProvince : {
        type : "string",
        size : 2
    }, 
    IDAmphur : {
        type : "string",
        size : 4
    }, 
    IDTambon : {
        type : "string",
        size : 6
    }, 
    IDMuuBahn : {
        type : "string",
        size : 8
    }, 
    Street1 : {
        type : "string",
        size : 60
    }, 
    ZipCode : {
        type : "string",
        size : 10
    }, 
    chkExport : {
        type : "integer",
        size : 1
    }, 
    NameInstitute : {
        type : "string",
        size : 60
    }, 
    NameInsEng : {
        type : "string",
        size : 60
    }, 
    ShortNameTha : {
        type : "string",
        size : 10
    }, 
    ShortNameEng : {
        type : "string",
        size : 10
    }, 
    NameFirst : {
        type : "string",
        size : 50
    }, 
    NameLast : {
        type : "string",
        size : 50
    }, 
    NameContact : {
        type : "string",
        size : 200
    }, 
    Position : {
        type : "string",
        size : 50
    }, 
    Telephone : {
        type : "string",
        size : 255
    }, 
    Email : {
        type : "string",
        size : 50
    }, 
    NameShort : {
        type : "string",
        size : 30
    }, 
    NameShortWelfare : {
        type : "string",
        size : 10
    }, 
    codeSocialwelfare : {
        type : "string",
        size : 9
    }, 
    DateChurchStarted : {
        type : "datetime"
    }, 
    DateBuild : {
        type : "datetime"
    }, 
    DateReceivedFromCh : {
        type : "datetime"
    }, 
    DateLastUpdated : {
        type : "datetime"
    }, 
    StatusOfData : {
        type : "string",
        size : 2
    }, 
    IDHelper : {
        type : "integer",
        size : 10
    }, 
    codeStatusData : {
        type : "string",
        size : 1
    }, 
    SupportBudget : {
        type : "integer",
        size : 10
    }, 
    'Fผู้รับ' : {
        type : "string",
        size : 50
    }, 
    'Lผู้รับ' : {
        type : "string",
        size : 50
    }, 
    'Fครูใหญ่' : {
        type : "string",
        size : 50
    }, 
    'Lครูใหญ่' : {
        type : "string",
        size : 50
    }, 
    InStatusChange : {
        type : "string",
        size : 2
    }, 
    InYear : {
        type : "integer",
        size : 5
    }, 
    OutStatusChange : {
        type : "string",
        size : 2
    }, 
    OutYear : {
        type : "integer",
        size : 5
    }, 
    codePrj79Status : {
        type : "string",
        size : 2
    }, 
    Prj79DateStart : {
        type : "datetime"
    }, 
    Prj79DateExit : {
        type : "datetime"
    }, 
    DataBaseVersion : {
        type : "string",
        size : 3
    }, 
    DateSentHelper : {
        type : "datetime"
    }, 
    DateReceivedHelper : {
        type : "datetime"
    }

  }
};

