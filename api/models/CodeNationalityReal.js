/**
* CodeNationalityReal.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeNationalityReal",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeNationality : {
            type : "string",
            size : 3
        }, 
        CountryDesc : {
            type : "string",
            size : 30
        }, 
        NationalityDesc : {
            type : "string",
            size : 20
        }, 
        RaceDesc : {
            type : "string",
            size : 20
        }, 
        codeNew : {
            type : "string",
            size : 3
        }

    }
};

