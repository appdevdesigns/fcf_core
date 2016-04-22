/**
* FCFPerson.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var AD = require('ad-utils');
var _ = require('lodash');

module.exports = {

  tableName:"tblAddresses",
  autoCreatedAt:false,
  autoUpdatedAt:false,
//   autoPK:false,
//   migrate:'safe',  // don't update the tables!
migrate:'alter',

  connection:"fcf",



  attributes: {

    IDPerson : {
        // type : "integer",
        // size : 4,
		// primaryKey : true
		model:'FCFPerson'
    }, 

    IDFamily : {
        type : "string",
        size : 10
    }, 

    IDGroup : {
        type : "string",
        size : 3
    }, 

    IDProject : {
        type : "integer",
        size : 5
    }, 

    IDMinistry : {
        type : "string",
        size : 5
    }, 

    codeAddressType : {
        type : "string",
        size : 5
    }, 

    flgIsLocalAddress : {
        type : "string",
        size : 5
    }, 

    Address1 : {
        type : "string",
        size : 48
    }, 

    Address2 : {
        type : "string",
        size : 27
    }, 

    Address1Thai : {
        type : "string",
        size : 84
    }, 

    Address2Thai : {
        type : "string",
        size : 65
    }, 

    IDMuubahn : {
        type : "integer",
        size : 10
    }, 

    Neighborhood : {
        type : "string",
        size : 14
    }, 

    NeighborhoodThai : {
        type : "string",
        size : 87
    }, 

    IDProvince : {
        type : "int",
        size : 2
    }, 

    ProvState : {
        type : "string",
        size : 27
    }, 

    IDAmphur : {
        type : "string",
        size : 15
    }, 

    AmpCity : {
        type : "string",
        size : 42
    }, 

    IDTambon : {
        type : "string",
        size : 6
    }, 

    TamArea : {
        type : "string",
        size : 9
    }, 

    Zip : {
        type : "string",
        size : 10
    }, 

    Country : {
        type : "string",
        size : 10
    }, 

    ManyPlotData : {
        type : "string",
        size : 10
    }


  }
};