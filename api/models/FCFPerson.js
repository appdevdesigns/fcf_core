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
        size : 11,
        primaryKey : true           // <--- update this when migrating data.
    }, 

    "flgNewImportLastBatch" : {
        type : "integer",
        size : 1
    }, 

    "flgSelectMe" : {
        type : "integer",
        size : 1
    }, 

    "SortNo" : {
        type : "integer",
        size : 6
    }, 

    "flgIsFCFThaiStaff" : {
        type : "integer",
        size : 1
    }, 

    "flgUpdatedFromApplication" : {
        type : "integer",
        size : 1
    }, 

    "flgUpdatedFromLume" : {
        type : "integer",
        size : 1
    }, 

    "codeWorkFlowPhase" : {
        type : "string",
        size : 5
    }, 

    "codeWorkPermitPhase" : {
        type : "string",
        size : 5
    }, 

    "codeVisaPhase" : {
        type : "string",
        size : 5
    }, 

    "codeVisaType" : {
        type : "string",
        size : 5
    }, 

    "codeVisaCategory" : {
        type : "string",
        size : 5
    }, 

    "IDProjectMain" : {   // <<---- Appdev: updated
        model: "FCFProject"
        // type : "string",
        // size : 5
    }, 

    "IDPersonSupervisor" : {
        type : "integer",
        size : 11
    }, 

    "IDFamily" : {
        type : "integer",
        size : 11
    }, 

    "flgIsHeadOfFamilyUnit" : {
        type : "integer",
        size : 1
    }, 

    "codeFamilyRelationship" : {
        type : "string",
        size : 5
    }, 

    "flgIsThai" : {
        type : "integer",
        size : 1
    }, 

    "DateBirth" : {
        type : "datetime"
    }, 

    "NameLastEng" : {
        type : "string",
        size : 35
    }, 

    "NameFirstEng" : {
        type : "string",
        size : 25
    }, 

    "NamePreferredEng" : {
        type : "string",
        size : 15
    }, 

    "NameMiddleEng" : {
        type : "string",
        size : 25
    }, 

    "NameTitleEng" : {
        type : "string",
        size : 15
    }, 

    "NameTitleThai" : {
        type : "string",
        size : 25
    }, 

    "NameFirstThai" : {
        type : "string",
        size : 35
    }, 

    "NameMiddleThai" : {
        type : "string",
        size : 25
    }, 

    "NameLastThai" : {
        type : "string",
        size : 35
    }, 

    "NamePreferredThai" : {
        type : "string",
        size : 15
    }, 

    "NamePersonFLEng" : {
        type : "string",
        size : 243
    }, 

    "NamePersonLFEng" : {
        type : "string",
        size : 243
    }, 

    "NamePersonFMLEng" : {
        type : "string",
        size : 243
    }, 

    "NamePersonFLThai" : {
        type : "string",
        size : 243
    }, 

    "NamePersonLFThai" : {
        type : "string",
        size : 243
    }, 

    "NamePersonFMLThai" : {
        type : "string",
        size : 243
    }, 

    "NamePersonThaiPF" : {
        type : "string",
        size : 243
    }, 

    "codeGender" : {
        type : "string",
        size : 1
    }, 

    "PlaceOfBirth" : {
        type : "string",
        size : 100
    }, 

    "codeNationality" : {
        model: "FCFCodeNationality"             // <<---- Appdev Update
        // type : "string",
        // size : 3
    },

    "codeRace" : {
        type : "string",
        size : 3
    }, 

    "codeMaritalStatus" : {
        type : "string",
        size : 2
    }, 

    "CollegeDegree" : {
        type : "string",
        size : 50
    }, 

    "codeEducationHighest" : {
        type : "string",
        size : 6
    }, 

    "EducationSchool" : {
        type : "string",
        size : 80
    }, 

    "EducationYearGrad" : {
        type : "string",
        size : 10
    }, 

    "EducationField" : {
        type : "string",
        size : 50
    }, 

    "EducationCountry" : {
        type : "string",
        size : 50
    }, 

    "LatestJob" : {
        type : "string",
        size : 150
    }, 

    "LastJobOccupation" : {
        type : "string",
        size : 50
    }, 

    "LastJobOccupationThai" : {
        type : "string",
        size : 50
    }, 

    "LastJobLocationName" : {
        type : "string",
        size : 50
    }, 

    "LastJobCountry" : {
        type : "string",
        size : 50
    }, 

    "LastJobPeriodOfEmployment" : {
        type : "string",
        size : 50
    }, 

    "LastJobReasonForResignation" : {
        type : "string",
        size : 50
    }, 

    "JobTitle" : {
        type : "string",
        size : 50
    }, 

    "JobDescSimple" : {
        type : "mediumtext"
    }, 

    "WorkAddress" : {
        type : "string",
        size : 50
    }, 

    "JobTitleEng" : {
        type : "string",
        size : 50
    }, 

    "JobDescSimpleEng" : {
        type : "string",
        size : 255
    }, 

    "WorkAddressEng" : {
        type : "string",
        size : 50
    }, 

    "flgDonationWaived" : {
        type : "integer",
        size : 1
    }, 

    "IDGroupSending" : {
        type : "string",
        size : 10
    }, 

    "IDGroupLocalOversite" : {
        type : "string",
        size : 10
    }, 

    "PPNumber" : {
        type : "string",
        size : 25
    }, 

    "PPCountryText" : {
        type : "string",
        size : 25
    }, 

    "codePPCountry" : {
        type : "string",
        size : 10
    }, 

    "PPIssuedWhere" : {
        type : "string",
        size : 50
    }, 

    "PPIssuedWhen" : {
        type : "datetime"
    }, 

    "PPDateExpire" : {
        type : "datetime"
    }, 

    "DateReturnFromBeingAway" : {
        type : "datetime"
    }, 

    "DateArrivalTarget" : {
        type : "datetime"
    }, 

    "DateArrived" : {
        type : "datetime"
    }, 

    "ArrivedFrom" : {
        type : "string",
        size : 55
    }, 

    "ArrivedBy" : {
        type : "string",
        size : 55
    }, 

    "ArrivalPort" : {
        type : "string",
        size : 50
    }, 

    "DepartureCardNo" : {
        type : "string",
        size : 10
    }, 

    "VisaDateFirst90Day" : {
        type : "datetime"
    }, 

    "VisaDateHearResults" : {
        type : "datetime"
    }, 

    "VisaDate1YearLetter" : {
        type : "datetime"
    }, 

    "VisaDateIssuedMostRecent" : {
        type : "datetime"
    }, 

    "VisaDateExpire" : {
        type : "datetime"
    }, 

    "codeVisaLength" : {
        type : "string",
        size : 1
    }, 

    "flgWPIsFCF" : {
        type : "integer",
        size : 1
    }, 

    "WPIssuedByWhom" : {
        type : "string",
        size : 25
    }, 

    "WPNumber" : {
        type : "string",
        size : 25
    }, 

    "WPDateReturned" : {
        type : "datetime"
    }, 

    "WPDateFirstIssued" : {
        type : "datetime"
    }, 

    "WPIssuedDate" : {
        type : "datetime"
    }, 

    "WPLength" : {
        type : "integer",
        size : 11
    }, 

    "WPExpireDate" : {
        type : "datetime"
    }, 

    "WPProvince" : {
        type : "string",
        size : 40
    }, 

    "WPProvinceThai" : {
        type : "string",
        size : 50
    }, 

    "flgWPCanceled" : {
        type : "integer",
        size : 1
    }, 

    "WPDateCanceled" : {
        type : "datetime"
    }, 

    "codeFieldOffice" : {
        type : "string",
        size : 3
    }, 

    "LocationEmployedThai" : {
        type : "string",
        size : 50
    }, 

    "DateDepartTarget" : {
        type : "datetime"
    }, 

    "DateExit" : {
        type : "datetime"
    }, 

    "DateLastCPTraining" : {
        type : "datetime"
    }, 

    "OOTDateDepart" : {
        type : "datetime"
    }, 

    "OOTDateReturn" : {
        type : "datetime"
    }, 

    "OOTNote" : {
        type : "string",
        size : 250
    }, 

    "flgNoReEntryStamp" : {
        type : "integer",
        size : 1
    }, 

    "Tel" : {
        type : "string",
        size : 25
    }, 

    "e-mail address" : {
        type : "string",
        size : 100
    }, 

    "Note" : {
        type : "string",
        size : 255
    }, 

    "Status" : {
        type : "string",
        size : 255
    }, 

    "Project" : {
        type : "string",
        size : 255
    }, 

    "DateNext90Days" : {
        type : "datetime"
    }, 

    "Work Schedule & Address" : {
        type : "string",
        size : 255
    }, 

    "codeProjectAppliedFor" : {
        type : "string",
        size : 255
    }, 

    "Total Visas with WP (Including Followers)" : {
        type : "float"
    }, 

    "MemoCostShare" : {
        type : "mediumtext"
    }, 

    "MemoCostShareVol" : {
        type : "mediumtext"
    }, 

    "flgCSOK" : {
        type : "integer",
        size : 1
    }, 

    "CostShareAssessed" : {
        type : "integer",
        size : 11
    }, 

    "CostShareWaived" : {
        type : "integer",
        size : 11
    }, 

    "CostShareDue" : {
        type : "integer",
        size : 11
    }, 

    "Cost Share Account" : {
        type : "string",
        size : 6
    }, 

    "CostShareAcctID" : {
        type : "string",
        size : 6
    }, 

    "codePaymentPlan" : {
        type : "string",
        size : 1
    }, 

    "codePaymentCycle" : {
        type : "string",
        size : 1
    }, 

    "PaymentStartMonth" : {
        type : "string",
        size : 2
    }, 

    "flgIncludeInStaffDirectory" : {
        type : "integer",
        size : 1
    }, 

    "Organization" : {
        type : "string",
        size : 255
    }, 

    "NameThaiFull1" : {
        type : "string",
        size : 55
    }, 

    "PositionThaiStaff" : {
        type : "string",
        size : 200
    }, 

    "IDThaiGovtCard" : {
        type : "string",
        size : 20
    }, 

    "DateExpireGovtCard" : {
        type : "datetime"
    }, 

    "GovtCardIssuedBy" : {
        type : "string",
        size : 50
    }, 

    "MemoNote" : {
        type : "mediumtext"
    }, 

    "MailingAddress" : {
        type : "string",
        size : 255
    }, 

    "PhysicalAddress" : {
        type : "string",
        size : 255
    }, 

    "LanguageSpoken" : {
        type : "string",
        size : 100
    }, 

    "Denomination" : {
        type : "string",
        size : 55
    }, 

    "MinistryContact" : {
        type : "string",
        size : 55
    }, 

    "BackGroundCheck" : {
        type : "integer",
        size : 1
    }, 

    "flgUseThisInfoForSA" : {
        type : "integer",
        size : 1
    }, 

    "SA" : {
        type : "string",
        size : 100
    }, 

    "SAContact" : {
        type : "string",
        size : 55
    }, 

    "SAEmail" : {
        type : "string",
        size : 55
    }, 

    "SAPhone" : {
        type : "string",
        size : 55
    }, 

    "SAAddress" : {
        type : "string",
        size : 255
    }, 

    "STTripDetails" : {
        type : "string",
        size : 255
    }, 

    "isMoreThan15Days" : {
        type : "integer",
        size : 1
    }, 

    "AppDatestamp" : {
        type : "datetime"
    }, 

    "rptMemoVisa365" : {
        type : "mediumtext"
    }, 

    "xyz-codePersonStatus" : {
        type : "string",
        size : 5
    }, 

    "flgQrtRptSubmitted" : {
        type : "integer",
        size : 1
    }, 

    "DateQrtRptSubmitted" : {
        type : "datetime"
    }, 

    "ECF_NameContact" : {
        type : "string",
        size : 50
    }, 

    "ECF_Email" : {
        type : "string",
        size : 50
    }, 

    "ECF_Phone" : {
        type : "string",
        size : 50
    }, 

    "ECF_Relationship" : {
        type : "string",
        size : 50
    }, 

    "flgProfileChecked" : {
        type : "integer",
        size : 1
    }, 

    "TSDateInterview" : {
        type : "datetime"
    }, 

    "TSDateStart" : {
        type : "datetime"
    }, 

    "TSYearsOfEmployment" : {
        type : "integer",
        size : 6
    }, 

    "codeMilitaryStatus" : {
        type : "string",
        size : 5
    }, 

    "codeStaffThai" : {
        type : "string",
        size : 3
    }, 
    
    "flgExcludeFromMCExport" : {
        type : "integer",
        size : 1
    },


// APPDEV Added here:

    cmdetails:{
        collection:'fcfcmdetails',
        via: 'IDPerson'
    },
    

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

