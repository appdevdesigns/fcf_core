/**
* CodeWorkPermitProcess.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeWorkPermitProcess",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeWorkPermitProcess : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        WorkPermitProcessDescNat : {
            type : "string",
            size : 50
        }, 
        WorkPermitProcessDescEng : {
            type : "string",
            size : 50
        }, 
        flgIsActiveStaff : {
            type : "integer",
            size : 1
        }, 
        flgIncludeFCFStaff : {
            type : "integer",
            size : 1
        }, 
        flgReceiveWeeklyAdminRpt : {
            type : "integer",
            size : 1
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }, 
        "Include in all-FCFStaff@" : {
            type : "integer",
            size : 1
        }, 
        "include in weekly admin report" : {
            type : "integer",
            size : 1
        }, 
        "all-FCFActiveStaff@" : {
            type : "integer",
            size : 1
        }, 
        "Report Order" : {
            type : "string",
            size : 255
        }, 
        Description : {
            type : "string",
            size : 255
        }, 
        "weekly admin report order" : {
            type : "float"
        }

    }
};

