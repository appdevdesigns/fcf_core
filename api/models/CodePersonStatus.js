/**
* CodePersonStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codePersonStatus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codePersonStatus : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        PersonStatusDescNat : {
            type : "string",
            size : 50
        }, 
        PersonStatusDescEng : {
            type : "string",
            size : 50
        }, 
        "Include in all-FCFStaff@" : {
            type : "integer",
            size : 1
        }, 
        flgIncludeFCFStaff : {
            type : "integer",
            size : 1
        }, 
        "include in weekly admin report" : {
            type : "integer",
            size : 1
        }, 
        flgReceiveWeeklyAdminRpt : {
            type : "integer",
            size : 1
        }, 
        "all-FCFActiveStaff@" : {
            type : "integer",
            size : 1
        }, 
        flgIsActiveStaff : {
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
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

