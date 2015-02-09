/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var AD = require('ad-utils');
var _ = require('lodash');

module.exports = {

  tableName:"tblPersons",
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  // migrate:'safe',  // don't update the tables!
migrate:'alter',

  connection:"fcf",


  attributes: {



    IDPerson : {
        type : "integer",
        size : 10,
        primaryKey : true
    }, 
    SortNo : {
        type : "integer",
        size : 5
    }, 
    codeWorkFlowPhase : {
        type : "string",
        size : 5
    }, 
    codeWorkPermitPhase : {
        type : "string",
        size : 5
    }, 
    codeVisaPhase : {
        type : "string",
        size : 5
    }, 
    codeVisaType : {
        type : "string",
        size : 5
    }, 
    codeWorkPermitProcessNow : {
        type : "string",
        size : 5
    }, 
    IDProjectMain : {
        type : "string",
        size : 5
    }, 
    IDFamily : {
        type : "integer",
        size : 10
    }, 
    codeFamilyRelationship : {
        type : "string",
        size : 5
    }, 
    flgIsThai : {
        type : "integer",
        size : 1
    }, 
    DateBirth : {
        type : "datetime"
    }, 
    NameLastEng : {
        type : "string",
        size : 35
    }, 
    NameFirstEng : {
        type : "string",
        size : 25
    }, 
    NamePreferredEng : {
        type : "string",
        size : 15
    }, 
    NameMiddleEng : {
        type : "string",
        size : 25
    }, 
    NameTitleEng : {
        type : "string",
        size : 10
    }, 
    NameThaiFull2 : {
        type : "string",
        size : 50
    }, 
    NameTitleThai : {
        type : "string",
        size : 15
    }, 
    NameFirstThai : {
        type : "string",
        size : 35
    }, 
    NameMiddleThai : {
        type : "string",
        size : 25
    }, 
    NameLastThai : {
        type : "string",
        size : 35
    }, 
    NamePreferredThai : {
        type : "string",
        size : 15
    }, 
    NamePersonFLEng : {
        type : "string",
        size : 243
    }, 
    NamePersonLFEng : {
        type : "string",
        size : 243
    }, 
    NamePersonFLThai : {
        type : "string",
        size : 243
    }, 
    NamePersonLFThai : {
        type : "string",
        size : 243
    }, 
    codeGender : {
        type : "string",
        size : 1
    }, 
    codeMaritalStatus : {
        type : "string",
        size : 2
    }, 
    CollegeDegree : {
        type : "string",
        size : 50
    }, 
    CollegeDescription : {
        type : "string",
        size : 50
    }, 
    EducationSchool : {
        type : "string",
        size : 50
    }, 
    EducationYearGrad : {
        type : "string",
        size : 10
    }, 
    EducationField : {
        type : "string",
        size : 50
    }, 
    EducationCountry : {
        type : "string",
        size : 50
    }, 
    LatestJob : {
        type : "string",
        size : 150
    }, 
    LastJobOccupation : {
        type : "string",
        size : 50
    }, 
    LastJobOccupationThai : {
        type : "string",
        size : 50
    }, 
    LastJobLocationName : {
        type : "string",
        size : 50
    }, 
    LastJobCountry : {
        type : "string",
        size : 50
    }, 
    LastJobPeriodOfEmployment : {
        type : "string",
        size : 50
    }, 
    LastJobReasonForResignation : {
        type : "string",
        size : 50
    }, 
    JobTitle : {
        type : "string",
        size : 50
    }, 
    JobDescSimple : {
        type : "string",
        size : 255
    }, 
    WorkAddress : {
        type : "string",
        size : 50
    }, 
    'WP Length (90,180,365)' : {
        type : "float"
    }, 
    WPLength : {
        type : "integer",
        size : 10
    }, 
    flgDonationWaived : {
        type : "integer",
        size : 1
    }, 
    IDGroupSending : {
        type : "string",
        size : 10
    }, 
    IDGroupLocalOversite : {
        type : "string",
        size : 10
    }, 
    PPNumber : {
        type : "string",
        size : 25
    }, 
    PPCountryText : {
        type : "string",
        size : 25
    }, 
    codePPCountry : {
        type : "string",
        size : 10
    }, 
    PPIssuedWhere : {
        type : "string",
        size : 50
    }, 
    VisaDateExpire : {
        type : "datetime"
    }, 
    WPNumber : {
        type : "string",
        size : 25
    }, 
    WPIssuedDate : {
        type : "datetime"
    }, 
    WPExpireDate : {
        type : "datetime"
    }, 
    WPProvince : {
        type : "string",
        size : 25
    }, 
    codeFieldOffice : {
        type : "string",
        size : 3
    }, 
    LocationEmployedThai : {
        type : "string",
        size : 50
    }, 
    DateArrivalTarget : {
        type : "datetime"
    }, 
    DateDepartTarget : {
        type : "string",
        size : 25
    }, 
    DateExit : {
        type : "string",
        size : 25
    }, 
    DateLastCPTraining : {
        type : "datetime"
    }, 
    'e-mail address' : {
        type : "string",
        size : 25
    }, 
    Note : {
        type : "string",
        size : 255
    }, 
    Status : {
        type : "string",
        size : 255
    }, 
    Project : {
        type : "string",
        size : 255
    }, 
    Tel : {
        type : "string",
        size : 25
    }, 
    '90 Days Check in' : {
        type : "string",
        size : 25
    }, 
    'Work Schedule & Address' : {
        type : "string",
        size : 255
    }, 
    codeProjectAppliedFor : {
        type : "string",
        size : 255
    }, 
    'Application Datestamp' : {
        type : "string",
        size : 25
    }, 
    PIANum : {
        type : "string",
        size : 25
    }, 
    FCLNum : {
        type : "string",
        size : 25
    }, 
    '3Num' : {
        type : "string",
        size : 25
    }, 
    '4Num' : {
        type : "string",
        size : 25
    }, 
    'Total Visas with WP (Including Followers)' : {
        type : "float"
    }, 
    'Donation Waved' : {
        type : "float"
    }, 
    DonationWiavedAmount : {
        type : "float",
        // size : 19,4
    }, 
    'Cost Share Statement' : {
        type : "string",
        size : 255
    }, 
    'Cost Share' : {
        type : "float"
    }, 
    'Staff Directory' : {
        type : "integer",
        size : 1
    }, 
    flgIncludeInStaffDirectory : {
        type : "integer",
        size : 1
    }, 
    Organization : {
        type : "string",
        size : 255
    }, 
    IDDBF : {
        type : "integer",
        size : 10
    }, 
    IDPersonOld : {
        type : "float"
    }, 
    NameThaiFull1 : {
        type : "string",
        size : 55
    }, 
    codePersonStatus : {
        type : "string",
        size : 5
    }, 
    PositionThaiStaff : {
        type : "string",
        size : 200
    }, 
    IDThaiGovtCard : {
        type : "string",
        size : 20
    }, 
    MemoNote : {
        type : "text"
    },



    taggedInImages: {
        collection:'FCFActivityImages',
        via:'taggedPeople'
    },



    displayName:function(code) {

        code = code || Multilingual.languages.default();

        if (code == 'en') {
            return this.NamePersonFLEng;
        } else {
            return this.NamePersonFLThai;
        }
    },



    ministryTeams:function() {
        var dfd = AD.sal.Deferred();
        var self = this;

        var minTeams = [];  // the final results

        var idMinistries = [];

        async.series([

            function(next) {
                FCFMinistryTeamMember.find({IDPerson:self.IDPerson})
                .then(function(list){
                    list.forEach(function(entry){
                        if (entry.IDMinistry) {
                            idMinistries.push(entry.IDMinistry);
                        }
                    })

                    next();
                })
                .fail(function(err){
                    next(err);
                })
            },

            function(next) {

                FCFMinistry.find({IDMinistry:idMinistries})
                .fail(function(err){
                    next(err);
                })
                .then(function(list){
                    minTeams = list;
                    next();
                })

            }
        ], function(err, result){
            if (err) {
                dfd.reject(err);
            } else {
                dfd.resolve(minTeams);
            }
        });


        return dfd;
    }

  }, 


    /**
     * @function Populate
     *
     * given an array of objects, insert an instance of person into that object
     * as long as there is a valid foreign key (fk) reference.
     *
     * @codestart
     *  var listTeams = [{ name:'a', ownerID: 1}, {name:'b', ownerID:234 }];
     *  FCFPerson.Populate(listTeams, 'owner', 'ownerID')
     *  .fail(function(err){
     *      console.log(err);
     *  })
     *  .then(function() {
     *      console.log(listTeams);  // now have 'owner' fields inserted
     *  })
     * // -> [{ name:'a', ownerID:1, 'owner':{ FCFPerson.1 }}, { name:'b', ownerID:234, 'owner':{ FCFPerson.234 }}]
     * @codeend
     * 
     * if no valid person reference is found, then a null value is inserted.
     *
     * @param {array} list  The array of objects to join to
     * @param {string} destKey (optional) The name of the property to store person
     *                 instance under.
     * @param {string} fk  (optional) the key that contains FCFPerson's pk
     * @return {Deferred} 
     */
    Populate:function(list, destKey, fk) {
        // var dfd = AD.sal.Deferred();

        var pk = 'IDPerson';                // the pk value in my definition
        fk = fk || pk;                      // the fk value in the existing list
        destKey =  destKey || 'person';     // what to store my model instance in list object
        var Model = FCFPerson;              // this Model


        return ADCore.model.join({ list:list, fk:fk, pk:pk, destKey:destKey, Model:Model });
    }
};



