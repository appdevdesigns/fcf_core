/**
* CodeServiceStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeServiceStatus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeServiceStatus : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        ServiceStatusDescNat : {
            type : "string",
            size : 25
        }, 
        ServiceStatusDescEng : {
            type : "string",
            size : 25
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

