/**
* ThaiStaff2.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"ThaiStaff2",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        Order : {
            type : "float"
        }, 
        GovtID : {
            type : "float"
        }, 
        Nfirst : {
            type : "string",
            size : 255
        }, 
        Nlast : {
            type : "string",
            size : 255
        }, 
        Position : {
            type : "string",
            size : 255
        }, 
        Field6 : {
            type : "float"
        }, 
        Field7 : {
            type : "string",
            size : 255
        }, 
        NameTitle : {
            type : "string",
            size : 50
        }, 
        IDProjectMain : {
            type : "string",
            size : 5
        }

    }
};

