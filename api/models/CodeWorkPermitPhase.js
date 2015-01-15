/**
* CodeWorkPermitPhase.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeWorkPermitPhase",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeWorkPermitPhase : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        codeWorkPermitPhaseNext : {
            type : "string",
            size : 5
        }, 
        WorkPermitPhaseDescNat : {
            type : "string",
            size : 25
        }, 
        WorkPermitPhaseDescEng : {
            type : "string",
            size : 25
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

