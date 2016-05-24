/**
 * FCFPerson.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
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

    "IDPerson" : {
        type : "integer",
        size : 4,
        primaryKey : true
    }, 

    "flgNewImportLastBatch" : {
        type : "string",
        size : 1
    }, 

    "flgSelectMe" : {
        type : "string",
        size : 1
    }, 

    "SortNo" : {
        type : "integer",
        size : 3
    }, 

    "flgIsFCFThaiStaff" : {
        type : "string",
        size : 1
    }, 

    "codeWorkFlowPhase" : {
        type : "string",
        size : 5
    }, 

    "codeWorkPermitPhase" : {
        type : "string",
        size : 3
    }, 

    "codeVisaPhase" : {
        type : "string",
        size : 3
    }, 

    "codeVisaType" : {
        type : "string",
        size : 5
    }, 

    "codeVisaCategory" : {
        type : "string",
        size : 4
    }, 

    "IDProjectMain" : {
        type : "string",
        size : 5
    }, 

    "IDFamily" : {
        type : "integer",
        size : 3
    }, 

    "codeFamilyRelationship" : {
        type : "string",
        size : 5
    }, 

    "flgIsThai" : {
        type : "string",
        size : 1
    }, 

    "DateBirth" : {
        type : "string",
        size : 11
    }, 

    "NameLastEng" : {
        type : "string",
        size : 20
    }, 

    "NameFirstEng" : {
        type : "string",
        size : 22
    }, 

    "NamePreferredEng" : {
        type : "string",
        size : 12
    }, 

    "NameMiddleEng" : {
        type : "string",
        size : 26
    }, 

    "NameTitleEng" : {
        type : "string",
        size : 14
    }, 

    "NameTitleThai" : {
        type : "string",
        size : 39
    }, 

    "NameFirstThai" : {
        type : "string",
        size : 36
    }, 

    "NameMiddleThai" : {
        type : "string",
        size : 58
    }, 

    "NameLastThai" : {
        type : "string",
        size : 58
    }, 

    "NamePreferredThai" : {
        type : "string",
        size : 37
    }, 

    "NamePersonFLEng" : {
        type : "string",
        size : 30
    }, 

    "NamePersonLFEng" : {
        type : "string",
        size : 31
    }, 

    "NamePersonFMLEng" : {
        type : "string",
        size : 57
    }, 

    "NamePersonFLThai" : {
        type : "string",
        size : 77
    }, 

    "NamePersonLFThai" : {
        type : "string",
        size : 78
    }, 

    "NamePersonFMLThai" : {
        type : "string",
        size : 126
    }, 

    "NamePersonThaiPF" : {
        type : "string",
        size : 63
    }, 

    "codeGender" : {
        type : "string",
        size : 1
    }, 

    "PlaceOfBirth" : {
        type : "string",
        size : 30
    }, 

    "codeNationality" : {
        type : "string",
        size : 13
    }, 

    "codeMaritalStatus" : {
        type : "string",
        size : 1
    }, 

    "CollegeDegree" : {
        type : "string",
        size : 10
    }, 

    "codeEducationHighest" : {
        type : "string",
        size : 8
    }, 

    "EducationSchool" : {
        type : "string",
        size : 81
    }, 

    "EducationYearGrad" : {
        type : "string",
        size : 10
    }, 

    "EducationField" : {
        type : "string",
        size : 92
    }, 

    "EducationCountry" : {
        type : "string",
        size : 27
    }, 

    "LatestJob" : {
        type : "string",
        size : 10
    }, 

    "LastJobOccupation" : {
        type : "string",
        size : 10
    }, 

    "LastJobOccupationThai" : {
        type : "string",
        size : 27
    }, 

    "LastJobLocationName" : {
        type : "string",
        size : 10
    }, 

    "LastJobCountry" : {
        type : "string",
        size : 10
    }, 

    "LastJobPeriodOfEmployment" : {
        type : "string",
        size : 10
    }, 

    "LastJobReasonForResignation" : {
        type : "string",
        size : 10
    }, 

    "JobTitle" : {
        type : "string",
        size : 137
    }, 

    "JobDescSimple" : {
        type : "string",
        size : 745
    }, 

    "WorkAddress" : {
        type : "string",
        size : 16
    }, 

    "flgDonationWaived" : {
        type : "string",
        size : 1
    }, 

    "IDGroupSending" : {
        type : "string",
        size : 4
    }, 

    "IDGroupLocalOversite" : {
        type : "string",
        size : 4
    }, 

    "PPNumber" : {
        type : "string",
        size : 13
    }, 

    "PPCountryText" : {
        type : "string",
        size : 25
    }, 

    "codePPCountry" : {
        type : "string",
        size : 6
    }, 

    "PPIssuedWhere" : {
        type : "string",
        size : 33
    }, 

    "PPIssuedWhen" : {
        type : "string",
        size : 11
    }, 

    "PPDateExpire" : {
        type : "string",
        size : 11
    }, 

    "DateReturnFromBeingAway" : {
        type : "string",
        size : 10
    }, 

    "DateArrivalTarget" : {
        type : "string",
        size : 11
    }, 

    "DateArrived" : {
        type : "string",
        size : 11
    }, 

    "ArrivedFrom" : {
        type : "string",
        size : 3
    }, 

    "ArrivedBy" : {
        type : "string",
        size : 5
    }, 

    "ArrivalPort" : {
        type : "string",
        size : 9
    }, 

    "DepartureCardNo" : {
        type : "string",
        size : 9
    }, 

    "VisaDateFirst90Day" : {
        type : "string",
        size : 9
    }, 

    "VisaDateHearResults" : {
        type : "string",
        size : 28
    }, 

    "VisaDate1YearLetter" : {
        type : "string",
        size : 9
    }, 

    "VisaDateExpire" : {
        type : "string",
        size : 254
    }, 

    "codeVisaLength" : {
        type : "string",
        size : 49
    }, 

    "flgWPIsFCF" : {
        type : "string",
        size : 39
    }, 

    "WPIssuedByWhom" : {
        type : "string",
        size : 153
    }, 

    "WPNumber" : {
        type : "string",
        size : 255
    }, 

    "WPDateReturned" : {
        type : "string",
        size : 31
    }, 

    "WPDateFirstIssued" : {
        type : "string",
        size : 127
    }, 

    "WPIssuedDate" : {
        type : "string",
        size : 107
    }, 

    "WPLength" : {
        type : "string",
        size : 141
    }, 

    "WPExpireDate" : {
        type : "string",
        size : 255
    }, 

    "WPProvince" : {
        type : "string",
        size : 128
    }, 

    "WPProvinceThai" : {
        type : "string",
        size : 91
    }, 

    "flgWPCanceled" : {
        type : "string",
        size : 93
    }, 

    "WPDateCanceled" : {
        type : "string",
        size : 255
    }, 

    "codeFieldOffice" : {
        type : "string",
        size : 255
    }, 

    "LocationEmployedThai" : {
        type : "string",
        size : 181
    }, 

    "DateDepartTarget" : {
        type : "string",
        size : 255
    }, 

    "DateExit" : {
        type : "string",
        size : 115
    }, 

    "DateLastCPTraining" : {
        type : "string",
        size : 87
    }, 

    "OOTDateDepart" : {
        type : "string",
        size : 255
    }, 

    "OOTDateReturn" : {
        type : "string",
        size : 83
    }, 

    "OOTNote" : {
        type : "string",
        size : 535
    }, 

    "flgNoReEntryStamp" : {
        type : "string",
        size : 100
    }, 

    "Tel" : {
        type : "string",
        size : 199
    }, 

    "e-mail address" : {
        type : "string",
        size : 592
    }, 

    "Note" : {
        type : "string",
        size : 224
    }, 

    "Status" : {
        type : "string",
        size : 72
    }, 

    "Project" : {
        type : "string",
        size : 86
    }, 

    "DateNext90Days" : {
        type : "string",
        size : 255
    }, 

    "Work Schedule & Address" : {
        type : "string",
        size : 538
    }, 

    "codeProjectAppliedFor" : {
        type : "string",
        size : 255
    }, 

    "Total Visas with WP (Including Followers)" : {
        type : "string",
        size : 549
    }, 

    "MemoCostShare" : {
        type : "string",
        size : 766
    }, 

    "MemoCostShareVol" : {
        type : "string",
        size : 105
    }, 

    "flgCSOK" : {
        type : "string",
        size : 132
    }, 

    "CostShareAssessed" : {
        type : "string",
        size : 86
    }, 

    "CostShareWaived" : {
        type : "string",
        size : 68
    }, 

    "CostShareDue" : {
        type : "string",
        size : 83
    }, 

    "Cost Share Account" : {
        type : "string",
        size : 93
    }, 

    "CostShareAcctID" : {
        type : "string",
        size : 71
    }, 

    "codePaymentPlan" : {
        type : "string",
        size : 92
    }, 

    "codePaymentCycle" : {
        type : "string",
        size : 62
    }, 

    "PaymentStartMonth" : {
        type : "string",
        size : 89
    }, 

    "flgIncludeInStaffDirectory" : {
        type : "string",
        size : 184
    }, 

    "Organization" : {
        type : "string",
        size : 209
    }, 

    "NameThaiFull1" : {
        type : "string",
        size : 185
    }, 

    "PositionThaiStaff" : {
        type : "string",
        size : 57
    }, 

    "IDThaiGovtCard" : {
        type : "string",
        size : 49
    }, 

    "MemoNote" : {
        type : "string",
        size : 1804
    }, 

    "MailingAddress" : {
        type : "string",
        size : 39
    }, 

    "PhysicalAddress" : {
        type : "string",
        size : 66
    }, 

    "LanguageSpoken" : {
        type : "string",
        size : 79
    }, 

    "Denomination" : {
        type : "string",
        size : 246
    }, 

    "MinistryContact" : {
        type : "string",
        size : 40
    }, 

    "BackGroundCheck" : {
        type : "string",
        size : 61
    }, 

    "flgUseThisInfoForSA" : {
        type : "string",
        size : 22
    }, 

    "SA" : {
        type : "string",
        size : 21
    }, 

    "SAContact" : {
        type : "string",
        size : 25
    }, 

    "SAEmail" : {
        type : "string",
        size : 25
    }, 

    "SAPhone" : {
        type : "string",
        size : 23
    }, 

    "SAAddress" : {
        type : "string",
        size : 22
    }, 

    "STTripDetails" : {
        type : "string",
        size : 6
    }, 

    "isMoreThan15Days" : {
        type : "string",
        size : 3
    }, 

    "AppDatestamp" : {
        type : "string",
        size : 11
    }, 

    "rptMemoVisa365" : {
        type : "string",
        size : 23
    }, 

    "xyz-codePersonStatus" : {
        type : "string",
        size : 32
    }, 

    "flgQrtRptSubmitted" : {
        type : "string",
        size : 11
    }, 

    "DateQrtRptSubmitted" : {
        type : "string",
        size : 7
    }, 

    "ECF_NameContact" : {
        type : "string",
        size : 10
    }, 

    "ECF_Email" : {
        type : "string",
        size : 10
    }, 

    "ECF_Phone" : {
        type : "string",
        size : 10
    }, 

    "ECF_Relationship" : {
        type : "string",
        size : 10
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


    displayName:function(code) {

        code = code || Multilingual.languages.default();

        if (code == 'en') {
            return this.NamePersonFLEng || '[en]'+this.NamePersonFLThai;
        } else {
            return this.NamePersonFLThai || '[th]'+this.NamePersonFLEng;
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
                    return null;
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
                    return null;
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

