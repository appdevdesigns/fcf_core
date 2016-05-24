/**
* CodeVisaType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeVisaType",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeVisaType : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        VisaTypeDescEng : {
            type : "string",
            size : 25
        }, 
        VisaTypeDescThai : {
            type : "string",
            size : 25
        }, 
        flgIsPrimary : {
            type : "integer",
            size : 1
        }, 
        flgIsDependent : {
            type : "integer",
            size : 1
        }, 
        flgShouldCount : {
            type : "integer",
            size : 1
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

