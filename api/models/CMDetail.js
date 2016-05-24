/**
* CMDetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblCMDetails",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDPerson : {
            type : "integer",
            size : 10
        }, 
        IDGroup : {
            type : "string",
            size : 10
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        codeCMType : {
            type : "string",
            size : 4
        }, 
        CMDetails : {
            type : "string",
            size : 60
        }

    }
};

