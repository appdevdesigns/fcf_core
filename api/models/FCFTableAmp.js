/**
 * FCFTableAmp.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName:'tblAmp',
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!


  connection:'fcf',



  attributes: {

    "GEOLEVEL" : {
        type : "float"
    }, 

    "IDAmp" : {
        type : "string",
        size : 4,
        primaryKey : true       // <<---- Appdev Update 
    },  

    "IDProv" : {
        type : "string",
        size : 2
    }, 

    "NAME_PRI" : {
        type : "string",
        size : 255
    }, 

    "NAME_SEC" : {
        type : "string",
        size : 255
    }, 

    "HASC" : {
        type : "string",
        size : 255
    }, 


  }
};

