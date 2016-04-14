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
        size : 11
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
        size : 58
    }, 

    NameLastThai : {
        type : "string",
        size : 58
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
        size : 31
    }, 

    NamePersonFMLEng : {
        type : "string",
        size : 57
    }, 

    NamePersonFLThai : {
        type : "string",
        size : 77
    }, 

    NamePersonLFThai : {
        type : "string",
        size : 78
    }, 

    NamePersonFMLThai : {
        type : "string",
        size : 126
    }, 

    NamePersonThaiPF : {
        type : "string",
        size : 63
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
        size : 13
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
        size : 8
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
        size : 4
    }, 

    IDGroupLocalOversite : {
        type : "string",
        size : 4
    }, 

    PPNumber : {
        type : "string",
        size : 13
    }, 

    PPCountryText : {
        type : "string",
        size : 25
    }, 

    codePPCountry : {
        type : "string",
        size : 6
    }, 

    PPIssuedWhere : {
        type : "string",
        size : 33
    }, 

    PPIssuedWhen : {
        type : "string",
        size : 11
    }, 

    PPDateExpire : {
        type : "string",
        size : 11
    }, 

    DateReturnFromBeingAway : {
        type : "string",
        size : 10
    }, 

    DateArrivalTarget : {
        type : "string",
        size : 11
    }, 

    DateArrived : {
        type : "string",
        size : 11
    }, 

    ArrivedFrom : {
        type : "string",
        size : 3
    }, 

    ArrivedBy : {
        type : "string",
        size : 5
    }, 

    ArrivalPort : {
        type : "string",
        size : 9
    }, 

    DepartureCardNo : {
        type : "string",
        size : 9
    }, 

    VisaDateFirst90Day : {
        type : "string",
        size : 9
    }, 

    VisaDateHearResults : {
        type : "string",
        size : 9
    }, 

    VisaDate1YearLetter : {
        type : "string",
        size : 9
    }, 

    VisaDateExpire : {
        type : "string",
        size : 17
    }, 

    codeVisaLength : {
        type : "string",
        size : 1
    }, 

    flgWPIsFCF : {
        type : "string",
        size : 5
    }, 

    WPIssuedByWhom : {
        type : "string",
        size : 10
    }, 

    WPNumber : {
        type : "string",
        size : 40
    }, 

    WPDateReturned : {
        type : "string",
        size : 10
    }, 

    WPDateFirstIssued : {
        type : "string",
        size : 11
    }, 

    WPIssuedDate : {
        type : "string",
        size : 11
    }, 

    WPLength : {
        type : "integer",
        size : 3
    }, 

    WPExpireDate : {
        type : "string",
        size : 11
    }, 

    WPProvince : {
        type : "string",
        size : 35
    }, 

    WPProvinceThai : {
        type : "string",
        size : 91
    }, 

    flgWPCanceled : {
        type : "string",
        size : 5
    }, 

    WPDateCanceled : {
        type : "string",
        size : 9
    }, 

    codeFieldOffice : {
        type : "string",
        size : 3
    }, 

    LocationEmployedThai : {
        type : "string",
        size : 10
    }, 

    DateDepartTarget : {
        type : "string",
        size : 11
    }, 

    DateExit : {
        type : "string",
        size : 11
    }, 

    DateLastCPTraining : {
        type : "string",
        size : 11
    }, 

    OOTDateDepart : {
        type : "string",
        size : 9
    }, 

    OOTDateReturn : {
        type : "string",
        size : 9
    }, 

    OOTNote : {
        type : "string",
        size : 65
    }, 

    flgNoReEntryStamp : {
        type : "string",
        size : 5
    }, 

    Tel : {
        type : "string",
        size : 25
    }, 

    "e-mail address" : {
        type : "string",
        size : 32
    }, 

    Note : {
        type : "string",
        size : 255
    }, 

    Status : {
        type : "string",
        size : 50
    }, 

    Project : {
        type : "string",
        size : 60
    }, 

    DateNext90Days : {
        type : "string",
        size : 11
    }, 

    "Work Schedule & Address" : {
        type : "string",
        size : 17
    }, 

    codeProjectAppliedFor : {
        type : "string",
        size : 255
    }, 

    "Total Visas with WP (Including Followers)" : {
        type : "integer",
        size : 1
    }, 

    MemoCostShare : {
        type : "string",
        size : 757
    }, 

    MemoCostShareVol : {
        type : "string",
        size : 105
    }, 

    flgCSOK : {
        type : "string",
        size : 5
    }, 

    CostShareAssessed : {
        type : "string",
        size : 9
    }, 

    CostShareWaived : {
        type : "string",
        size : 9
    }, 

    CostShareDue : {
        type : "string",
        size : 9
    }, 

    "Cost Share Account" : {
        type : "string",
        size : 6
    }, 

    CostShareAcctID : {
        type : "string",
        size : 6
    }, 

    codePaymentPlan : {
        type : "string",
        size : 1
    }, 

    codePaymentCycle : {
        type : "string",
        size : 1
    }, 

    PaymentStartMonth : {
        type : "string",
        size : 10
    }, 

    flgIncludeInStaffDirectory : {
        type : "string",
        size : 5
    }, 

    Organization : {
        type : "string",
        size : 28
    }, 

    NameThaiFull1 : {
        type : "string",
        size : 115
    }, 

    PositionThaiStaff : {
        type : "string",
        size : 100
    }, 

    IDThaiGovtCard : {
        type : "string",
        size : 13
    }, 

    MemoNote : {
        type : "string",
        size : 538
    }, 

    MailingAddress : {
        type : "string",
        size : 132
    }, 

    PhysicalAddress : {
        type : "string",
        size : 88
    }, 

    LanguageSpoken : {
        type : "string",
        size : 93
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
        type : "string",
        size : 5
    }, 

    flgUseThisInfoForSA : {
        type : "string",
        size : 5
    }, 

    SA : {
        type : "string",
        size : 72
    }, 

    SAContact : {
        type : "string",
        size : 51
    }, 

    SAEmail : {
        type : "string",
        size : 39
    }, 

    SAPhone : {
        type : "string",
        size : 26
    }, 

    SAAddress : {
        type : "string",
        size : 246
    }, 

    STTripDetails : {
        type : "string",
        size : 45
    }, 

    isMoreThan15Days : {
        type : "string",
        size : 5
    }, 

    AppDatestamp : {
        type : "string",
        size : 9
    }, 

    rptMemoVisa365 : {
        type : "string",
        size : 1295
    }, 

    "xyz-codePersonStatus" : {
        type : "string",
        size : 5
    }, 

    flgQrtRptSubmitted : {
        type : "string",
        size : 5
    }, 

    DateQrtRptSubmitted : {
        type : "string",
        size : 15
    }, 

    "ECF_NameContact" : {
        type : "string",
        size : 30
    }, 

    "ECF_Email" : {
        type : "string",
        size : 32
    }, 

    "ECF_Phone" : {
        type : "string",
        size : 15
    }, 

    "ECF_Relationship" : {
        type : "string",
        size : 13
    }, 

// APPDEV Added here:

    taggedInImages: {
        collection:'FCFActivityImages',
        via:'taggedPeople'
    },


	address: {
		collection:'FCFAddress',
		via: 'IDPerson'
	},


    displyName:function(code) {

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

