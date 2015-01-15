/**
* Province.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblProv",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        GEOLEVEL : {
            type : "float"
        }, 
        IDProv : {
            type : "string",
            size : 2,
            primaryKey : true
        }, 
        NAME_PRI : {
            type : "string",
            size : 255
        }, 
        NAME_SEC : {
            type : "string",
            size : 255
        }, 
        HASC : {
            type : "string",
            size : 255
        }

    }
};

