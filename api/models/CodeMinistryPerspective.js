/**
* CodeMinistryPerspective.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"codeMinistryPerspective",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        codeMinistryPerspective : {
            type : "string",
            size : 2,
            primaryKey : true
        }, 

        codeMinistryPerspectiveDescNat : {
            type : "string",
            size : 50
        }, 

        codeMinistryPerspectiveDescEng : {
            type : "string",
            size : 50
        }, 

        SortNo : {
            type : "integer",
            size : 5
        }

    }
};

