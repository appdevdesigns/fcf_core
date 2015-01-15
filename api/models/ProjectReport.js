/**
* ProjectReport.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblProjectReports",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDReport : {
            type : "integer",
            size : 10,
            primaryKey : true
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        codeReportType : {
            type : "string",
            size : 5
        }, 
        DateSubmitted : {
            type : "datetime"
        }, 
        DateReviewed : {
            type : "datetime"
        }, 
        SupportingDocuments : {
            type : "text"
        }

    }
};

