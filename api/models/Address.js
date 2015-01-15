/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblAddresses",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDPerson : {
            type : "integer",
            size : 10
        }, 
        IDFamily : {
            type : "integer",
            size : 10
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        codeAddressType : {
            type : "string",
            size : 4
        }, 
        flgIsLocalAddress : {
            type : "integer",
            size : 1
        }, 
        Address1 : {
            type : "string",
            size : 50
        }, 
        Address2 : {
            type : "string",
            size : 50
        }, 
        IDMuubahn : {
            type : "string",
            size : 50
        }, 
        Neighborhood : {
            type : "string",
            size : 50
        }, 
        IDTambon : {
            type : "string",
            size : 6
        }, 
        TamArea : {
            type : "string",
            size : 30
        }, 
        IDAmphur : {
            type : "string",
            size : 4
        }, 
        AmpCity : {
            type : "string",
            size : 30
        }, 
        IDProvince : {
            type : "string",
            size : 2
        }, 
        ProvState : {
            type : "string",
            size : 50
        }, 
        Zip : {
            type : "string",
            size : 10
        }, 
        Country : {
            type : "string",
            size : 50
        }, 
        ManyPlotData : {
            type : "text"
        }

    }
};

