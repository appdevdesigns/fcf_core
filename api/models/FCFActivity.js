/**
* FCFActivity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"fcf_activity",

    // connection:"mysql",
    connection:'fcf',

// migrate:'alter',  // don't update the tables!

    attributes: {

        date_start : { type: 'date', required:true },

        date_end : { type: 'date' },

        default_image: {type:'string'},

        // @hasOne Team (FCFMinistry)
        team:{
            model:'FCFMinistry',
            required: true
        },

        createdBy: {
            model:'FCFPerson'
        },

        approvedBy: {
            model:'FCFPerson'
        },

        objectives: {
            collection:'FCFObjective',
            via:'activities'
        },

        images: {
            collection:'FCFActivityImages',
            via:'activity'
        },

        status:{
            type:'string',
            defaultsTo:'new',
            enum:['new', 'approved', 'denied', 'translated', 'ready', 'updated']
            // 'new'        : just created, waiting for approval
            // 'approved'   : approved, waiting for translation
            // 'translated' : translated waiting for next step
            // 'ready'      : finally ready for use by reports
            // 'updated'    : a change happened, and now waiting for approval again
            // 'denied'     : not approved (either as newly created or updated)
        }
          
        //// 
        //// AppDev Multilingual Extensions:
        ////

        // @hasMany FCFActivityTrans relationship
        // this will pull in the translations using: 
        //      FCFActivity.find().populate('translations')
        ,translations:{
            collection:'FCFActivityTrans',
            via:'fcfactivity'
        },


        imageURL: function() {

            if (this.default_image) {
                return FCFCore.paths.forURL( FCFCore.paths.images.activities(this.default_image))
            } else {
                return '/data/fcf/images/activities/placeholder_activity.jpg';
            }
        },


        toClient: function(langCode) {

            var obj = {};
            obj.id = this.id;
            obj.date_start = this.date_start;
            obj.date_end = this.date_end;
            obj.default_image = this.default_image;

            obj.imageURL = this.imageURL();

            obj.team = this.team;
            obj.activity_name = this.activity_name;

            obj.createdBy = null;
            if (this.createdBy) {
                obj.createdBy = this.createdBy.displayName ? this.createdBy.displayName(langCode) : this.createdBy;
            }

            obj.approvedBy = null;
            if (this.approvedBy) {
                obj.approvedBy = this.approvedBy.displayName ? this.approvedBy.displayName(langCode): this.approvedBy;
            }
            
            return obj;
        },


        // .translate( langCode ) can translate an instance of FCFActivity  
        //                        with the proper labels.
        translate:function(code) {
            return ADCore.model.translate({
                model:this,         // this instance of a Model
                code:code,          // the language code of the translation to use.
                ignore:['fcfactivity']     // don't include this field when translating
            });
        },


        // enable the instance of a model to return the Model Class Object.
        _Klass: function() {
            return FCFActivity;
        }

    },

    beforeValidate: function(valuesToUpdate, cb) {

        if ((valuesToUpdate.date_end == null)
            || (valuesToUpdate.date_end == '')
            || (valuesToUpdate.date_end == '0000-00-00')) {
            delete valuesToUpdate.date_end;
        }

        cb();
    }

};

