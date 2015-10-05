/**
* FCFPerson.js
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
  migrate:'safe',  // don't update the tables!


  connection:"fcf",



  attributes: {

    IDPerson : {
        type : "integer",
        size : 4,
        primaryKey : true
    }, 

    flgNewImportLastBatch : {
        type : "string",
        size : 5
    }, 

    flgSelectMe : {
        type : "string",
        size : 5
    }, 

    SortNo : {
        type : "integer",
        size : 3
    }, 

    flgIsFCFThaiStaff : {
        type : "string",
        size : 5
    }, 

    codeWorkFlowPhase : {
        type : "string",
        size : 5
    }, 

    codeWorkPermitPhase : {
        type : "string",
        size : 3
    }, 

    codeVisaPhase : {
        type : "string",
        size : 3
    }, 

    codeVisaType : {
        type : "string",
        size : 5
    }, 

    codeVisaCategory : {
        type : "string",
        size : 4
    }, 

    IDProjectMain : {
        type : "string",
        size : 5
    }, 

    IDFamily : {
        type : "integer",
        size : 3
    }, 

    codeFamilyRelationship : {
        type : "string",
        size : 5
    }, 

    flgIsThai : {
        type : "string",
        size : 5
    }, 

    DateBirth : {
        type : "string",
        size : 10
    }, 

    NameLastEng : {
        type : "string",
        size : 20
    }, 

    NameFirstEng : {
        type : "string",
        size : 22
    }, 

    NamePreferredEng : {
        type : "string",
        size : 12
    }, 

    NameMiddleEng : {
        type : "string",
        size : 26
    }, 

    NameTitleEng : {
        type : "string",
        size : 14
    }, 

    NameTitleThai : {
        type : "string",
        size : 39
    }, 

    NameFirstThai : {
        type : "string",
        size : 36
    }, 

    NameMiddleThai : {
        type : "string",
        size : 43
    }, 

    NameLastThai : {
        type : "string",
        size : 48
    }, 

    NamePreferredThai : {
        type : "string",
        size : 37
    }, 

    NamePersonFLEng : {
        type : "string",
        size : 30
    }, 

    NamePersonLFEng : {
        type : "string",
        size : 42
    }, 

    NamePersonFMLEng : {
        type : "string",
        size : 57
    }, 

    NamePersonFLThai : {
        type : "string",
        size : 70
    }, 

    NamePersonLFThai : {
        type : "string",
        size : 71
    }, 

    NamePersonFMLThai : {
        type : "string",
        size : 115
    }, 

    codeGender : {
        type : "string",
        size : 1
    }, 

    PlaceOfBirth : {
        type : "string",
        size : 30
    }, 

    codeNationality : {
        type : "string",
        size : 3
    }, 

    codeMaritalStatus : {
        type : "string",
        size : 1
    }, 

    CollegeDegree : {
        type : "string",
        size : 10
    }, 

    codeEducationHighest : {
        type : "string",
        size : 16
    }, 

    EducationSchool : {
        type : "string",
        size : 81
    }, 

    EducationYearGrad : {
        type : "string",
        size : 10
    }, 

    EducationField : {
        type : "string",
        size : 92
    }, 

    EducationCountry : {
        type : "string",
        size : 27
    }, 

    LatestJob : {
        type : "string",
        size : 10
    }, 

    LastJobOccupation : {
        type : "string",
        size : 10
    }, 

    LastJobOccupationThai : {
        type : "string",
        size : 27
    }, 

    LastJobLocationName : {
        type : "string",
        size : 10
    }, 

    LastJobCountry : {
        type : "string",
        size : 10
    }, 

    LastJobPeriodOfEmployment : {
        type : "string",
        size : 10
    }, 

    LastJobReasonForResignation : {
        type : "string",
        size : 10
    }, 

    JobTitle : {
        type : "string",
        size : 137
    }, 

    JobDescSimple : {
        type : "string",
        size : 745
    }, 

    WorkAddress : {
        type : "string",
        size : 16
    }, 

    flgDonationWaived : {
        type : "string",
        size : 5
    }, 

    IDGroupSending : {
        type : "string",
        size : 8
    }, 

    IDGroupLocalOversite : {
        type : "string",
        size : 25
    }, 

    PPNumber : {
        type : "string",
        size : 254
    }, 

    PPCountryText : {
        type : "string",
        size : 255
    }, 

    codePPCountry : {
        type : "string",
        size : 49
    }, 

    PPIssuedWhere : {
        type : "string",
        size : 43
    }, 

    PPIssuedWhen : {
        type : "string",
        size : 153
    }, 

    PPDateExpire : {
        type : "string",
        size : 28
    }, 

    DateReturnFromBeingAway : {
        type : "string",
        size : 31
    }, 

    DateArrivalTarget : {
        type : "string",
        size : 75
    }, 

    DateArrived : {
        type : "string",
        size : 156
    }, 

    ArrivedFrom : {
        type : "string",
        size : 184
    }, 

    ArrivedBy : {
        type : "string",
        size : 141
    }, 

    ArrivalPort : {
        type : "string",
        size : 71
    }, 

    DepartureCardNo : {
        type : "string",
        size : 128
    }, 

    VisaDateExpire : {
        type : "string",
        size : 255
    }, 

    codeVisaLength : {
        type : "string",
        size : 91
    }, 

    flgWPIsFCF : {
        type : "string",
        size : 255
    }, 

    WPIssuedByWhom : {
        type : "string",
        size : 31
    }, 

    WPNumber : {
        type : "string",
        size : 255
    }, 

    WPDateReturned : {
        type : "string",
        size : 255
    }, 

    WPDateFirstIssued : {
        type : "string",
        size : 115
    }, 

    WPIssuedDate : {
        type : "string",
        size : 50
    }, 

    WPLength : {
        type : "string",
        size : 100
    }, 

    WPExpireDate : {
        type : "string",
        size : 255
    }, 

    WPProvince : {
        type : "string",
        size : 93
    }, 

    WPProvinceThai : {
        type : "string",
        size : 132
    }, 

    codeFieldOffice : {
        type : "string",
        size : 535
    }, 

    LocationEmployedThai : {
        type : "string",
        size : 93
    }, 

    DateDepartTarget : {
        type : "string",
        size : 60
    }, 

    DateExit : {
        type : "string",
        size : 62
    }, 

    DateLastCPTraining : {
        type : "string",
        size : 42
    }, 

    Tel : {
        type : "string",
        size : 46
    }, 

    "e-mail address" : {
        type : "string",
        size : 67
    }, 

    Note : {
        type : "string",
        size : 255
    }, 

    Status : {
        type : "string",
        size : 80
    }, 

    Project : {
        type : "string",
        size : 97
    }, 

    DateNext90Days : {
        type : "string",
        size : 538
    }, 

    "Work Schedule & Address" : {
        type : "string",
        size : 86
    }, 

    codeProjectAppliedFor : {
        type : "string",
        size : 255
    }, 

    "Application Datestamp" : {
        type : "string",
        size : 209
    }, 

    "Total Visas with WP (Including Followers)" : {
        type : "string",
        size : 62
    }, 

    "Cost Share Amount" : {
        type : "string",
        size : 219
    }, 

    "Cost Share Waived" : {
        type : "string",
        size : 80
    }, 

    MemoCostShare : {
        type : "string",
        size : 715
    }, 

    flgCSOK : {
        type : "string",
        size : 68
    }, 

    CostShareAssessed : {
        type : "string",
        size : 71
    }, 

    CostShareWaived : {
        type : "string",
        size : 72
    }, 

    CostShareDue : {
        type : "string",
        size : 86
    }, 

    "Cost Share Account" : {
        type : "string",
        size : 246
    }, 

    CostShareAcctID : {
        type : "string",
        size : 93
    }, 

    codePaymentPlan : {
        type : "string",
        size : 209
    }, 

    codePaymentCycle : {
        type : "string",
        size : 89
    }, 

    PaymentStartMonth : {
        type : "string",
        size : 169
    }, 

    flgIncludeInStaffDirectory : {
        type : "string",
        size : 111
    }, 

    Organization : {
        type : "string",
        size : 83
    }, 

    NameThaiFull1 : {
        type : "string",
        size : 85
    }, 

    PositionThaiStaff : {
        type : "string",
        size : 185
    }, 

    IDThaiGovtCard : {
        type : "string",
        size : 44
    }, 

    MemoNote : {
        type : "string",
        size : 66
    }, 

    MailingAddress : {
        type : "string",
        size : 79
    }, 

    PhysicalAddress : {
        type : "string",
        size : 56
    }, 

    LanguageSpoken : {
        type : "string",
        size : 1295
    }, 

    Denomination : {
        type : "string",
        size : 61
    }, 

    MinistryContact : {
        type : "string",
        size : 12
    }, 

    BackGroundCheck : {
        type : "string",
        size : 59
    }, 

    flgUseThisInfoForSA : {
        type : "string",
        size : 9
    }, 

    SA : {
        type : "string",
        size : 5
    }, 

    SAContact : {
        type : "string",
        size : 5
    }, 

    SAEmail : {
        type : "string",
        size : 10
    }, 

    SAPhone : {
        type : "string",
        size : 10
    }, 

    SAAddress : {
        type : "string",
        size : 10
    }, 

    STTripDetails : {
        type : "string",
        size : 10
    }, 

    isMoreThan15Days : {
        type : "string",
        size : 10
    }, 

    "x-codeWorkPermitProcessNow" : {
        type : "string",
        size : 10
    }, 

    "xxxDonation Waved" : {
        type : "string",
        size : 10
    }, 

    AppDatestamp : {
        type : "string",
        size : 10
    }, 

    rptMemoVisa365 : {
        type : "string",
        size : 10
    }, 

    "xyz-codePersonStatus" : {
        type : "string",
        size : 10
    }, 

    flgQrtRptSubmitted : {
        type : "string",
        size : 10
    }, 

    DateQrtRptSubmitted : {
        type : "string",
        size : 10
    }, 

    ECF_NameContact : {
        type : "string",
        size : 10
    }, 

    ECF_Email : {
        type : "string",
        size : 10
    }, 

    ECF_Phone : {
        type : "string",
        size : 10
    }, 

    ECF_Relationship : {
        type : "string",
        size : 10
    }, 

// APPDEV Added here:

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



    getID: function() {
        return this.IDPerson;
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
                .catch(function(err){
                    next(err);
                })
            },

            function(next) {
// AD.log('   ... FCFMinistry.find()');
                FCFMinistry.find({IDMinistry:idMinistries})
                // .populate('IDProject')
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

