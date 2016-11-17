/**
 * FCFAddress.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var AD = require('ad-utils');
var _ = require('lodash');

module.exports = {

  tableName:"tblAddresses",
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!
// migrate:'alter',

  connection:"fcf",



  attributes: {

    // "ID" : {                         // <<---- Appdev : use ours below
    //     type : "integer",
    //     size : 11,
    // }, 

    IDPerson : {                        // <<---- Appdev Update
        // type : "integer",
        // size : 4,
        // primaryKey : true
        model:'FCFPerson'
    }, 

    "IDFamily" : {
        type : "integer",
        size : 11
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

    "codeAddressType" : {
        type : "string",
        size : 4
    }, 

    "flgIsLocalAddress" : {
        type : "integer",
        size : 1
    }, 

    "Address1" : {
        type : "string",
        size : 50
    }, 

    "Address2" : {
        type : "string",
        size : 50
    }, 

    "Address1Thai" : {
        type : "string",
        size : 50
    }, 

    "Address2Thai" : {
        type : "string",
        size : 50
    }, 

    "IDMuubahn" : {
        type : "string",
        size : 50
    }, 

    "Neighborhood" : {
        type : "string",
        size : 50
    }, 

    "NeighborhoodThai" : {
        type : "string",
        size : 50
    }, 

    "IDProvince" : {
        type : "string",
        size : 2
    }, 

    "ProvState" : {
        type : "string",
        size : 50
    }, 

    "IDAmphur" : {
        type : "string",
        size : 4
    }, 

    "AmpCity" : {
        type : "string",
        size : 30
    }, 

    "IDTambon" : {
        type : "string",
        size : 6
    }, 

    "TamArea" : {
        type : "string",
        size : 30
    }, 

    "Zip" : {
        type : "string",
        size : 10
    }, 

    "Country" : {
        type : "string",
        size : 50
    }, 

    "ManyPlotData" : {
        type : "mediumtext"
    }, 


    "id" : {                            // <<---- Appdev Update
        type : "integer",
        size : 10,
        primaryKey : true,
        autoIncrement : true,
        columnName:'ID'
    }

  }
};

