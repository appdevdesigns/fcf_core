/**
* CodeNationalitySub.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeNationalitySub",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeNationalitySub : {
            type : "string",
            size : 25,
            primaryKey : true
        }, 
        codeNationality : {
            type : "string",
            size : 25
        }, 
        NationalitySubDescThai : {
            type : "string",
            size : 50
        }, 
        NationalitySubDescEng : {
            type : "string",
            size : 50
        }

    }
};

