/**
* Ministry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var AD = require('ad-utils');

module.exports = {

    tableName:"tblministries",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDMinistry : {
            type : "integer",
            size : 10,
            primaryKey : true
        }, 
        codeMinistryStatus : {
            type : "string",
            size : 5
        }, 
        IDProject : {
            type : "string",
            size : 5
        }, 
        NameMinistryNat : {
            type : "string",
            size : 50
        }, 
        NameMinistryEng : {
            type : "string",
            size : 50
        }, 
        DateMinistryStarted : {
            type : "datetime"
        }, 
        DateMinistryEnded : {
            type : "datetime"
        }, 
        IDPersonResponsible : {
            type : "integer",
            size : 10
        }, 
        WorkAddressThai : {
            type : "string",
            size : 50
        }, 
        WorkAddressEng : {
            type : "string",
            size : 50
        }, 
        MinistryDisplayName : {
            type : "string",
            size : 243
        },


        // @hasMany Activities (FCFActivity)
        activities:{
            collection:'FCFActivity',
            via: 'team'
        },


        populateOwner:function() {

            var dfd = AD.sal.Deferred();
            var self = this;

            this.personResponsible = null;
            if (this.IDPersonResponsible) {

                FCFPerson.findOne({IDPerson: this.IDPersonResponsible})
                .fail(function(err){
                    dfd.reject(err);
                })
                .then(function(person) {
                    self.personResponsible = person;
                    dfd.resolve();
                })

            } else {
                dfd.resolve();
            }

            return dfd;

        }

    }
};

