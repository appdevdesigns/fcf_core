/**
* CodeReportType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeReportType",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeReportType : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        ReportTypeDescThai : {
            type : "string",
            size : 50
        }, 
        ReportTypeDescEng : {
            type : "string",
            size : 50
        }, 
        codeTimeFrame : {
            type : "string",
            size : 3
        }, 
        flgIsRequired : {
            type : "integer",
            size : 1
        }

    }
};

