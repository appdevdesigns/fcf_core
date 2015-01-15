/**
* CodeGender.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeGender",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeGender : {
            type : "string",
            size : 1,
            primaryKey : true
        }, 

        GenderDescThai : {
            type : "string",
            size : 10
        }, 

        GenderDescEng : {
            type : "string",
            size : 10
        }


    }
};

