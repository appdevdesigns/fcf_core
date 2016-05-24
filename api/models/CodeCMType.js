/**
* CodeCMType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeCMType",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeCMType : {
            type : "string",
            size : 4,
            primaryKey : true
        }, 

        CMTypeDescThai : {
            type : "string",
            size : 50
        }, 

        CMTypeDescEng : {
            type : "string",
            size : 50
        }, 

        CMTypeDescEngShort : {
            type : "string",
            size : 50
        }, 

        flgIsPhoneNumber : {
            type : "integer",
            size : 1
        }, 

        CMPrintCode : {
            type : "string",
            size : 5
        }


    }
};

