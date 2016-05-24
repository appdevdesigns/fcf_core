/**
* CodeFieldOffices.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeFieldOffices",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",



    attributes: {

        codeFieldOffice : {
            type : "string",
            size : 3
        }, 

        FieldOfficeNameNat : {
            type : "string",
            size : 50
        }, 

        FieldOfficeNameEng : {
            type : "string",
            size : 50
        }

    }
};

