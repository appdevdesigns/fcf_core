/**
 * FCFObjective.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName:"tblObjectives",
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  // migrate:'safe',  // don't update the tables!
migrate:'alter',

  connection:"fcf",



  attributes: {

    "IDObjective" : {
        type : "integer",
        size : 11,
        primaryKey : true,              // <<--- Appdev Additions
        autoIncrement : true
    }, 

    "IDGroup" : {
        type : "string",
        size : 10
    }, 

    "IDProject" : {
        type : "string",
        size : 5
    }, 

    "IDMinistry" : {
        type : "integer",
        size : 11
    }, 

    "ObjectiveDescThai" : {
        type : "string",
        size : 250
    }, 

    "ObjectiveDescEng" : {
        type : "string",
        size : 250
    }, 

    "IDObjectiveParent" : {
        type : "integer",
        size : 11
    }, 

    "GrpObjTag" : {
        type : "string",
        size : 5
    }, 

    "ObjTag" : {
        type : "string",
        size : 15
    }, 

    "HeartObjectiveDescThai" : {
        type : "string",
        size : 250
    }, 

    "HeartObjectiveDescEng" : {
        type : "string",
        size : 250
    }, 


//// APPDEV ADDITIONS: 

    activities: {
      collection:'FCFActivity',
      via:'objectives'
    },




    description:function(code) {

        code = code || Multilingual.languages.default();

        if (code == 'en') {
            return this.ObjectiveDescEng;
        } else {
            return this.ObjectiveDescThai;
        }
    }


  }
};
