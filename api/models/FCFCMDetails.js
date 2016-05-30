/**
 * FCFCMDetails.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt:false,
  autoUpdatedAt:false,
  // autoPK:false,
  migrate:'safe',  // don't update the tables!


  tableName:'tblCMDetails',


  connection:'fcf',



  attributes: {

    "IDPerson" : {
        // type : "integer",
        // size : 10
        model:"fcfperson"
    }, 

    "IDGroup" : {
        type : "string",
        size : 10
    }, 

    "IDProject" : {
        type : "string",
        size : 5
    }, 

    "codeCMType" : {
        type : "string",
        size : 4
    }, 

    "CMDetails" : {
        type : "string",
        size : 60
    }


  }
};

