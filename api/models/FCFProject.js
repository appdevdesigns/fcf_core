/**
* Projec.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"tblProjects",
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
    migrate:'safe',  // don't update the tables!


    connection:"fcf",


    attributes: {

        IDProject : {
            type : "string",
            size : 5,
            primaryKey : true
        }, 
        IDGroup : {
            type : "string",
            size : 10
        }, 
        codeProjectStatus : {
            type : "string",
            size : 5
        }, 
        'xxActive (TF)' : {
            type : "integer",
            size : 1
        }, 
        codeFieldOffice : {
            type : "string",
            size : 3
        }, 
        IDPersonLeading : {
            type : "integer",
            size : 10
        }, 
        LeaderLookUp : {
            type : "integer",
            size : 10
        }, 
        'xProject Leader Email (Copy)' : {
            type : "string",
            size : 255
        }, 
        'Project Leader Email' : {
            type : "string",
            size : 255
        }, 
        IDAcctCodeCostShare : {
            type : "integer",
            size : 5
        }, 
        ProjectNameNat : {
            type : "string",
            size : 100
        }, 
        ProjectNameEng : {
            type : "string",
            size : 100
        }, 
        'xxFCF Project Name' : {
            type : "string",
            size : 255
        }, 
        ProjectDescriptionEng : {
            type : "text"
        }, 
        ProjectDescriptionNat : {
            type : "text"
        }, 
        ProjectRationalNat : {
            type : "text"
        }, 
        ProjectRationalEng : {
            type : "text"
        }, 
        ProjectObjectivesNat : {
            type : "string",
            size : 250
        }, 
        ProjectObjectivesEng : {
            type : "string",
            size : 250
        }, 
        TargetBeneficiaries : {
            type : "string",
            size : 250
        }, 
        ProjectPlan : {
            type : "text"
        }, 
        ProjectDateStart : {
            type : "datetime"
        }, 
        ProjectDateEnd : {
            type : "datetime"
        }, 
        BudgetSummary : {
            type : "text"
        }, 
        ProjectEvaluation : {
            type : "text"
        }, 
        BenefitToSociety : {
            type : "string",
            size : 250
        }, 
        flgIncludeInDirectory : {
            type : "integer",
            size : 1
        }, 
        'xxxinclude in directory' : {
            type : "integer",
            size : 1
        }, 
        'Visa Letter Statement' : {
            type : "text"
        }, 
        Field4 : {
            type : "float"
        }, 
        Field5 : {
            type : "float"
        }, 
        'Active Volunteers (Num)' : {
            type : "float"
        }, 
        'Size ((millions/year)*10)' : {
            type : "float"
        }, 
        'Monthly Cost Share Amount' : {
            type : "float"
        }, 
        'Amount Waived' : {
            type : "float"
        }, 
        'Cost Share Account' : {
            type : "float"
        }, 
        "1 Year MOU established on:" : {
            type : "string",
            size : 255
        }, 
        'logo (max 100x100)' : {
            type : "string",
            size : 255
        }, 
        ID1 : {
            type : "integer",
            size : 10
        }, 
        ID : {
            type : "float"
        }, 
        ProjectContext : {
            type : "text"
        }, 
        ProjectVision : {
            type : "string",
            size : 250
        }, 
        ProjectGuidingPrincipels : {
            type : "string",
            size : 50
        }, 
        ProjectMissionStatesment : {
            type : "string",
            size : 250
        }, 
        ProjectFocus : {
            type : "string",
            size : 250
        }, 
        ProjectTransformationStatement : {
            type : "string",
            size : 50
        }, 
        ProjectTargetBeneficiaries : {
            type : "text"
        }, 
        ProjectTeamOverview : {
            type : "text"
        }, 
        Project3YearPlan : {
            type : "text"
        }, 
        ProjectTrainingPlan : {
            type : "text"
        }, 
        FundRaisingPlan : {
            type : "text"
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

