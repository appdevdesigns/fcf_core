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
        '1 Year MOU established on' : {
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
        }

    }
};

