/**
* CodeCountries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeCountries",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",



    attributes: {

        codeCountry : {
            type : "string",
            size : 10,
            primaryKey : true
        }, 

        chkIsPassportCountry : {
            type : "integer",
            size : 1
        }, 

        chkIsServiceCountry : {
            type : "integer",
            size : 1
        }, 

        CountryDescThai : {
            type : "string",
            size : 40
        }, 

        CountryDescEng : {
            type : "string",
            size : 40
        }, 

        SortOrderNoPassport : {
            type : "integer",
            size : 5
        }, 

        SortOrderNoService : {
            type : "integer",
            size : 5
        }


    }
};

