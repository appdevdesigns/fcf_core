/**
* CodeWorkFlowPhase.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeWorkFlowPhase",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeWorkFlowPhase : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        codeWorkFlowNextPhase : {
            type : "string",
            size : 5
        }, 
        WorkFlowPhaseDescNat : {
            type : "string",
            size : 30
        }, 
        WorkFlowPhaseDescEng : {
            type : "string",
            size : 30
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

