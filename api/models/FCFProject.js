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
        primaryKey : true
    }, 

    "IDGroup" : {
        type : "string",
        size : 4
    }, 

    "codeProjectStatus" : {
        type : "string",
        size : 2
    }, 

    "flgIsCCFProject" : {
        type : "string",
        size : 1
    }, 

    "codeFieldOffice" : {
        type : "string",
        size : 3
    }, 

    "IDPersonLeading" : {
        type : "integer",
        size : 3
    }, 

    "LeaderLookUp" : {
        type : "string",
        size : 10
    }, 

    "flgAttendsMonthlyMeetings" : {
        type : "string",
        size : 1
    }, 

    "ProjectNameNat" : {
        type : "string",
        size : 107
    }, 

    "ProjectNameEng" : {
        type : "string",
        size : 60
    }, 

    "ProjectNameNickThai" : {
        type : "string",
        size : 30
    }, 

    "ProjectNameNickEng" : {
        type : "string",
        size : 10
    }, 

    "ProjectDescriptionEng" : {
        type : "string",
        size : 1382
    }, 

    "ProjectDescriptionNat" : {
        type : "string",
        size : 10
    }, 

    "ProjectRationalNat" : {
        type : "string",
        size : 1112
    }, 

    "ProjectRationalEng" : {
        type : "string",
        size : 662
    }, 

    "ProjectObjectivesNat" : {
        type : "string",
        size : 2324
    }, 

    "ProjectObjectivesEng" : {
        type : "string",
        size : 911
    }, 

    "ProjectOperationPlanNat" : {
        type : "string",
        size : 1260
    }, 

    "ProjectOperationPlanEng" : {
        type : "string",
        size : 1525
    }, 

    "ProjectPlan" : {
        type : "string",
        size : 10
    }, 

    "ProjectDateStart" : {
        type : "string",
        size : 10
    }, 

    "ProjectDateEnd" : {
        type : "string",
        size : 9
    }, 

    "BudgetSummary" : {
        type : "string",
        size : 19
    }, 

    "ProjectEvaluationEng" : {
        type : "string",
        size : 372
    }, 

    "ProjectEvaluationNat" : {
        type : "string",
        size : 936
    }, 

    "BenefitToSocietyNat" : {
        type : "string",
        size : 934
    }, 

    "BenefitToSocietyEng" : {
        type : "string",
        size : 774
    }, 

    "flgIncludeInDirectory" : {
        type : "string",
        size : 6
    }, 

    "flgIsPartOfCostShareSystem" : {
        type : "string",
        size : 40
    }, 

    "CostShareAmountPrj" : {
        type : "string",
        size : 371
    }, 

    "CostShareAmountWaived" : {
        type : "string",
        size : 371
    }, 

    "CostShareAmountDue" : {
        type : "integer",
        size : 4
    }, 

    "CostShareAcctIDPrj" : {
        type : "integer",
        size : 6
    }, 

    "CostShareAcctIDVol" : {
        type : "string",
        size : 41
    }, 

    "CostShareAmountPrjNext" : {
        type : "string",
        size : 437
    }, 

    "CostShareAmountWaivedNext" : {
        type : "string",
        size : 364
    }, 

    "ProjectContext" : {
        type : "string",
        size : 10
    }, 

    "ProjectVision" : {
        type : "string",
        size : 10
    }, 

    "ProjectGuidingPrincipels" : {
        type : "string",
        size : 10
    }, 

    "ProjectMissionStatesment" : {
        type : "string",
        size : 10
    }, 

    "ProjectFocus" : {
        type : "string",
        size : 10
    }, 

    "ProjectTransformationStatement" : {
        type : "string",
        size : 10
    }, 

    "ProjectTargetBeneficiariesEng" : {
        type : "string",
        size : 10
    }, 

    "ProjectTargetBeneficiariesNat" : {
        type : "string",
        size : 10
    }, 

    "ProjectTeamOverview" : {
        type : "string",
        size : 10
    }, 

    "Project3YearPlan" : {
        type : "string",
        size : 10
    }, 

    "ProjectTrainingPlan" : {
        type : "string",
        size : 10
    }, 

    "FundRaisingPlan" : {
        type : "string",
        size : 10
    }, 

    "MemoCostShareIssues" : {
        type : "string",
        size : 10
    }, 

    "Visa Letter Statement" : {
        type : "string",
        size : 10
    }, 

    "EstimatedYearlyBudgetMillion" : {
        type : "string",
        size : 10
    }, 



        teams: {
            collection:'FCFMinistry',
            via:'IDProject'
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

