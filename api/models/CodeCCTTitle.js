/**
* CodeCCTTitle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeCCTTitle",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeCCTTitle : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 

        CCTTitleDescThai : {
            type : "string",
            size : 50
        }, 

        CCTTitleDescEng : {
            type : "string",
            size : 255
        }, 

        CCTTitleDescThaiShort : {
            type : "string",
            size : 5
        }


    }
};

