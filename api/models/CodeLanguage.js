/**
* CodeLanguage.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeLanguage",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeLanguage : {
            type : "string",
            size : 3,
            primaryKey : true
        }, 

        LanguageDescThai : {
            type : "string",
            size : 50
        }, 

        LanguageDescEng : {
            type : "string",
            size : 50
        }

    }
};

