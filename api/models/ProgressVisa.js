/**
* ProgressVisa.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblProgressVisa",
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
        codeVisaPhase : {
            type : "string",
            size : 5
        }, 
        DateStartPhase : {
            type : "datetime"
        }, 
        DateEndPhase : {
            type : "datetime"
        }, 
        IDStaffPersonResponsible : {
            type : "integer",
            size : 10
        }

    }
};

