/**
* CodeMinistryFocus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeMinistryFocus",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeMinistryFocus : {
            type : "string",
            size : 10,
            primaryKey : true
        }, 

        codeMinistryPerspective : {
            type : "string",
            size : 2
        }, 

        MinistryFocusDescNat : {
            type : "string",
            size : 50
        }, 

        MinistryFocusDescEng : {
            type : "string",
            size : 50
        }, 

        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

