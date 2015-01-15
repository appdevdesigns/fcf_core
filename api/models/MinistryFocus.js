/**
* MinistryFocus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblMinistryFocus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDGroup : {
            type : "string",
            size : 10
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        IDMinistry : {
            type : "integer",
            size : 10
        }, 
        IDActivity : {
            type : "integer",
            size : 10
        }, 
        codeMinistryFocus : {
            type : "string",
            size : 10
        }

    }
};

