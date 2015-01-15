/**
* CodeTimeFrame.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeTimeFrame",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeTimeFrame : {
            type : "string",
            size : 3,
            primaryKey : true
        }, 
        TimeFrameDescNat : {
            type : "string",
            size : 10
        }, 
        TimeFrameDescEng : {
            type : "string",
            size : 10
        }, 
        TimeFrameValuePerMonth : {
            type : "float"
        }, 
        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

