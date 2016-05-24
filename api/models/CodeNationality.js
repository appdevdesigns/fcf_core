/**
* CodeNationality.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

      tableName:"codeNationality",
      autoCreatedAt:false,
      autoUpdatedAt:false,
      autoPK:false,
      migrate:'safe',  // don't update the tables!


      connection:"fcf",


      attributes: {

            codeNationality : {
                type : "string",
                size : 25,
                primaryKey : true
            }, 

            codeLanguageSIL : {
                type : "string",
                size : 3
            }, 

            NationalityDescThai : {
                type : "string",
                size : 50
            }, 

            NationalityDescEng : {
                type : "string",
                size : 50
            }, 

            flgCountAsThai : {
                type : "integer",
                size : 1
            }, 

            flgIsTribal : {
                type : "integer",
                size : 1
            }, 

            flgIsNonThai : {
                type : "integer",
                size : 1
            }, 

            flgToSurvey : {
                type : "integer",
                size : 1
            }, 

            TotalPopNationWide : {
                type : "integer",
                size : 10
            }, 

            TotPop : {
                type : "integer",
                size : 10
            }, 

            TotChrPop : {
                type : "integer",
                size : 10
            }, 

            codeChurchPopType : {
                type : "string",
                size : 6
            }, 

            codeEthnicTEC : {
                type : "string",
                size : 4
            }

      }
};

