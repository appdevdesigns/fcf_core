/**
* CodeHRWorkFlowTasks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

      tableName:"codeHRWorkFlowTasks",
      autoCreatedAt:false,
      autoUpdatedAt:false,
      autoPK:false,
      migrate:'safe',  // don't update the tables!


      connection:"fcf",



      attributes: {

            IDWorkFlowTask : {
                type : "integer",
                size : 10,
                primaryKey : true
            }, 

            codeWorkFlowPhase : {
                type : "string",
                size : 5
            }, 

            SortNoOnLillyPad : {
                type : "integer",
                size : 5
            }, 

            TaskDescEngShort : {
                type : "string",
                size : 8
            }, 

            TaskDescEng : {
                type : "string",
                size : 50
            }, 

            TaskDescNat : {
                type : "string",
                size : 50
            }, 

            codeTaskDependency : {
                type : "integer",
                size : 10
            }, 

            flgIsOptional : {
                type : "integer",
                size : 1
            }, 

            flgForMicroTerm : {
                type : "integer",
                size : 1
            }, 

            codeDeptResponsible : {
                type : "string",
                size : 5
            }, 

            codeRoleResponsible : {
                type : "string",
                size : 5
            }, 

            IDPersonResponsible : {
                type : "integer",
                size : 10
            }, 

            SortNo : {
                type : "integer",
                size : 5
            }


      }
};

