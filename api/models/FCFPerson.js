/**
* FCFPerson.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var AD = require('ad-utils');
var _ = require('lodash');

module.exports = {

  tableName:"tblpersons",
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!


  connection:"fcf",



  attributes: {

    IDPerson : {
        type : "integer",
        size : 10,
        primaryKey : true
    }, 

    flgNewImportLastBatch : {
        type : "integer",
        size : 1
    }, 

    flgSelectMe : {
        type : "integer",
        size : 1
    }, 

    SortNo : {
        type : "?smallint?",
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

    codeVisaCategory : {
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

    PlaceOfBirth : {
        type : "string",
        size : 255
    }, 

    codeNationality : {
        type : "string",
        size : 3
    }, 

    codeMaritalStatus : {
        type : "string",
        size : 2
    }, 

    CollegeDegree : {
        type : "string",
        size : 50
    }, 

    codeEducationHighest : {
        type : "string",
        size : 6
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

    PPIssuedWhen : {
        type : "datetime"
    }, 

    PPDateExpire : {
        type : "datetime"
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

    DateArrived : {
        type : "datetime"
    }, 

    ArrivedFrom : {
        type : "string",
        size : 255
    }, 

    ArrivedBy : {
        type : "string",
        size : 255
    }, 

    DepartureCardNo : {
        type : "string",
        size : 10
    }, 

    ArrivalPort : {
        type : "string",
        size : 50
    }, 

    DateDepartTarget : {
        type : "datetime"
    }, 

    DateExit : {
        type : "datetime"
    }, 

    DateLastCPTraining : {
        type : "datetime"
    }, 

    Tel : {
        type : "string",
        size : 25
    }, 

    "e-mail address" : {
        type : "string",
        size : 100
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

    DateNext90Days : {
        type : "datetime"
    }, 

    "Work Schedule & Address" : {
        type : "string",
        size : 255
    }, 

    codeProjectAppliedFor : {
        type : "string",
        size : 255
    }, 

    "Application Datestamp" : {
        type : "datetime"
    }, 

    "Total Visas with WP (Including Followers)" : {
        type : "float"
    }, 

    "xxxDonation Waved" : {
        type : "integer",
        size : 10
    }, 

    "Cost Share Amount" : {
        type : "integer",
        size : 10
    }, 

    "Cost Share Waived" : {
        type : "integer",
        size : 10
    }, 

    "Cost Share Account" : {
        type : "string",
        size : 6
    }, 

    "Staff Directory" : {
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

    MailingAddress : {
        type : "string",
        size : 255
    }, 

    PhysicalAddress : {
        type : "string",
        size : 255
    }, 

    LanguageSpoken : {
        type : "string",
        size : 100
    }, 

    Denomination : {
        type : "string",
        size : 55
    }, 

    MinistryContact : {
        type : "string",
        size : 55
    }, 

    BackGroundCheck : {
        type : "integer",
        size : 1
    }, 

    SA : {
        type : "string",
        size : 100
    }, 

    SAContact : {
        type : "string",
        size : 55
    }, 

    SAEmail : {
        type : "string",
        size : 55
    }, 

    SAPhone : {
        type : "string",
        size : 55
    }, 

    SAAddress : {
        type : "string",
        size : 255
    }, 

    STTripDetails : {
        type : "string",
        size : 255
    }, 

    isMoreThan15Days : {
        type : "integer",
        size : 1
    }, 

    "x-PIANum" : {
        type : "string",
        size : 25
    }, 

    "x-FCLNum" : {
        type : "string",
        size : 25
    }, 

    "x-3Num" : {
        type : "string",
        size : 25
    }, 

    "x-4Num" : {
        type : "string",
        size : 25
    }, 

    AppDatestamp : {
        type : "datetime"
    }, 

    NamePersonFMLEng : {
        type : "string",
        size : 243
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
// AD.log('   ministryTeams():');
        var dfd = AD.sal.Deferred();
        var self = this;

        var minTeams = [];  // the final results

        var idMinistries = [];

        async.series([

            function(next) {
// AD.log('   ... FCFMinistryTeamMember.find()');
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
// AD.log('   ... FCFMinistry.find()');
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


  }
};

