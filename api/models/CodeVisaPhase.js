/**
* CodeVisaPhase.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeVisaPhase",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeVisaPhase : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        codeVisaPhaseNext : {
            type : "string",
            size : 5
        }, 
        VisaPhaseDescNat : {
            type : "string",
            size : 50
        }, 
        VisaPhaseDescEng : {
            type : "string",
            size : 50
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

