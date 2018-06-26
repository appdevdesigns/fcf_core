/**
 * FCFProject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK:false,
  migrate:'safe',  // don't update the tables!


  tableName:'tblProjects',


  connection:'fcf',



  attributes: {

    "IDProject" : {
        type : "string",
        size : 5,

        primaryKey : true               // <<<--- Appdev Update
    }, 

    "IDGroup" : {
        type : "string",
        size : 10
    }, 

    "codeProjectStatus" : {
        type : "string",
        size : 5
    }, 

    "flgIsCCFProject" : {
        type : "integer",
        size : 1
    }, 

    "codeFieldOffice" : {
        type : "string",
        size : 3
    }, 

    "IDPersonLeading" : {
        type : "integer",
        size : 11
    }, 

    "LeaderLookUp" : {
        type : "integer",
        size : 11
    }, 

    "flgAttendsMonthlyMeetings" : {
        type : "integer",
        size : 1
    }, 

    "ProjectNameNat" : {
        type : "string",
        size : 100
    }, 

    "ProjectNameEng" : {
        type : "string",
        size : 100
    }, 

    "ProjectNameNickThai" : {
        type : "string",
        size : 30
    }, 

    "ProjectNameNickEng" : {
        type : "string",
        size : 30
    }, 

    "ProjectDescriptionEng" : {
        type : "mediumtext"
    }, 

    "ProjectDescriptionNat" : {
        type : "mediumtext"
    }, 

    "ProjectRationalNat" : {
        type : "mediumtext"
    }, 

    "ProjectRationalEng" : {
        type : "mediumtext"
    }, 

    "ProjectObjectivesNat" : {
        type : "mediumtext"
    }, 

    "ProjectObjectivesEng" : {
        type : "mediumtext"
    }, 

    "ProjectOperationPlanNat" : {
        type : "mediumtext"
    }, 

    "ProjectOperationPlanEng" : {
        type : "mediumtext"
    }, 

    "ProjectPlan" : {
        type : "mediumtext"
    }, 

    "ProjectDateStart" : {
        type : "datetime"
    }, 

    "ProjectDateEnd" : {
        type : "datetime"
    }, 

    "BudgetSummary" : {
        type : "mediumtext"
    }, 

    "ProjectEvaluationEng" : {
        type : "mediumtext"
    }, 

    "ProjectEvaluationNat" : {
        type : "mediumtext"
    }, 

    "BenefitToSocietyNat" : {
        type : "mediumtext"
    }, 

    "BenefitToSocietyEng" : {
        type : "mediumtext"
    }, 

    "flgIncludeInDirectory" : {
        type : "integer",
        size : 1
    }, 

    "flgIsPartOfCostShareSystem" : {
        type : "integer",
        size : 1
    }, 

    "CostShareAmountPrj" : {
        type : "integer",
        size : 11
    }, 

    "CostShareAmountWaived" : {
        type : "integer",
        size : 11
    }, 

    "CostShareAmountDue" : {
        type : "integer",
        size : 11
    }, 

    "CostShareAcctIDPrj" : {
        type : "string",
        size : 6
    }, 

    "CostShareAcctIDVol" : {
        type : "string",
        size : 6
    }, 

    "CostShareAmountPrjNext" : {
        type : "integer",
        size : 11
    }, 

    "CostShareAmountWaivedNext" : {
        type : "integer",
        size : 11
    }, 

    "ProjectContext" : {
        type : "mediumtext"
    }, 

    "ProjectVision" : {
        type : "string",
        size : 250
    }, 

    "ProjectGuidingPrincipels" : {
        type : "string",
        size : 50
    }, 

    "ProjectMissionStatesment" : {
        type : "string",
        size : 250
    }, 

    "ProjectFocus" : {
        type : "string",
        size : 250
    }, 

    "ProjectTransformationStatement" : {
        type : "string",
        size : 50
    }, 

    "ProjectTargetBeneficiariesEng" : {
        type : "mediumtext"
    }, 

    "ProjectTargetBeneficiariesNat" : {
        type : "mediumtext"
    }, 

    "ProjectTeamOverview" : {
        type : "mediumtext"
    }, 

    "Project3YearPlan" : {
        type : "mediumtext"
    }, 

    "ProjectTrainingPlan" : {
        type : "mediumtext"
    }, 

    "FundRaisingPlan" : {
        type : "mediumtext"
    }, 

    "MemoCostShareIssues" : {
        type : "mediumtext"
    }, 

    "Visa Letter Statement" : {
        type : "mediumtext"
    }, 

    "EstimatedYearlyBudgetMillion" : {
        type : "integer",
        size : 11
    }, 


//// APPDEV UPDATES:

        teams: {
            collection:'FCFMinistry',
            via:'IDProject'
        },

        staffs: {
            collection:'FCFPerson',
            via:'project'
        },


        displayName:function(code) {

            code = code || Multilingual.languages.default();

            if (code == 'en') {
                return this.ProjectNameEng;
            } else {
                return this.ProjectNameNat;
            }
        }


  },


  

    /**
     * @function Populate
     *
     * given an array of objects, insert an instance of Projects into that object
     * as long as there is a valid foreign key (fk) reference.
     *
     * @codestart
     *  var listTeams = [{ name:'a', proj_id: 1}, {name:'b', proj_id:234 }];
     *  FCFProjects.Populate(listTeams, 'project_owner', 'proj_id')
     *  .fail(function(err){
     *      console.log(err);
     *  })
     *  .then(function() {
     *      console.log(listTeams);  // now have 'project_owner' fields inserted
     *  })
     * // -> [{ name:'a', proj_id:1, 'project_owner':{ FCFProjects.1 }}, { name:'b', proj_id:234, 'owner':{ FCFProjects.234 }}]
     * @codeend
     * 
     * if no valid FCFProject reference is found, then a null value is inserted.
     *
     * @param {array} list  The array of objects to join to
     * @param {string} destKey (optional) The name of the property to store this
     *                 instance under.
     * @param {string} fk  (optional) the key that contains our pk
     * @return {Deferred} 
     */
    Populate:function(list, destKey, fk) {
        // var dfd = AD.sal.Deferred();

        var pk = 'IDProject';                // the pk value in my definition
        fk = fk || pk;                       // the fk value in the existing list
        destKey =  destKey || 'project';     // what to store my model instance in list object
        var Model = FCFProject;             // this Model


        return ADCore.model.join({ list:list, fk:fk, pk:pk, destKey:destKey, Model:Model });
    }
};

