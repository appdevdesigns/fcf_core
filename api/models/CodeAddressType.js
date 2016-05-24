/**
* CodeAddressType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeAddressType",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeAddressType : {
            type : "string",
            size : 4,
            primaryKey : true
        }, 

        AddressTypeDesc : {
            type : "string",
            size : 50
        }, 

        DateLastUpdated : {
            type : "datetime"
        }

    }
};

