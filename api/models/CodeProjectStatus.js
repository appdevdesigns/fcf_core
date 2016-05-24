/**
* CodeProjectStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeProjectStatus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeProjectStatus : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        ProjectStatusDescNat : {
            type : "string",
            size : 50
        }, 
        ProjectStatusDescEng : {
            type : "string",
            size : 50
        }, 
        flgIsActive : {
            type : "integer",
            size : 1
        }, 
        SortNo : {
            type : "integer",
            size : 10
        }

    }
};

