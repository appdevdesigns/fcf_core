/**
 * FCFLocationController
 *
 * @description :: Server-side logic for managing FCFLocations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var AD = require('ad-utils');
var _ = require('lodash');

module.exports = {

    _config: {
        model: "fcflocation", // all lowercase model name
        // actions: true,
        // shortcuts: true,
        rest: true
    },


    // get /fcf_core/fcflocation?[filterCondition]
    find:function(req, res) {

// AD.log('-----------------');
// AD.log('params:', req.params);
// AD.log('body:', req.body);
// AD.log('query:', req.query);

        var filter = req.query;
console.log('filter:', filter);

		// filter off additional params 
    	// "_cas_retry": "23708552",
    	// "ticket": "ST-31676-WKdNW3YZMJeDxNOBBcla-cas"
        if(filter.ticket) delete filter.ticket;
        if(filter._cas_retry) delete filter._cas_retry;


        // what is the current language_code of the User
        var langCode = ADCore.user.current(req).getLanguageCode();

console.log('langCode:', langCode);


		FCFLocation.find(filter)
        .populate('translations')
        .sort('priority DESC')
        .then(function(list){

        	flatten(langCode, list);
console.log('list:', list);

			var sortedList = _.orderBy(list, ['priority', 'name'], ['desc', 'asc']);
console.log('sortedList:', sortedList);

            ADCore.comm.success(res,sortedList);
        }) 
        .catch(function(err){
console.log(err);
            ADCore.comm.error(res, err);

            err._model = 'FCFLocation';
            err._filter = filter;
            err._langCode = langCode;
            AD.log.error('<bold>error:</bold> error looking up FCFLocation', err);

        });

    },


    // get /fcf_core/fcflocation/:id?[filter]
    findOne:function(req, res) {

        var id = req.param('id');

        var filter = req.query;
        if (id) filter.id = id;

		// what is the current language_code of the User
        var langCode = ADCore.user.current(req).getLanguageCode();

		FCFLocation.findOne(filter)
        .populate('translations')
        .then(function(location){

        	var list = [location];
        	flatten(langCode, list);

            ADCore.comm.success(res,location);
        }) 
        .catch(function(err){

            ADCore.comm.error(res, err);

            err._model = 'FCFLocation';
            err._filter = filter;
            err._langCode = langCode;
            AD.log.error('<bold>error:</bold> error looking up FCFLocation', err);

        });

    },


    create:function(req, res) {

        var fields = allFields();
        var reqFields = requiredFields();

console.log('');
console.log('create():');
console.log('fields:', fields);
console.log('requiredFields:', reqFields);


        var values = {};
        var missingFields = [];
        fields.forEach(function(f){
            values[f] = req.param(f);
            if (!values[f] && reqFields.indexOf(f)>-1) {
            	missingFields.push(f);
            }
        })
        if (missingFields.length > 0) {
			var err = new Error('Missing required field(s):'+missingFields.join(', '));
            ADCore.comm.error(res, err, 400);
            return;
        }

        var languageCode = ADCore.user.current(req).getLanguageCode();
        values.language_code = values.language_code || languageCode;


		Multilingual.model.create({ model:FCFLocation, data: values })
        .then(function(mlLocation) {


			FCFLocation.findOne({id:mlLocation.id})
			.populate('translations')
			.then((location)=>{

				var list = [location];
				flatten(values.language_code, list);

				location.translation = undefined;
				ADCore.comm.success(res, location);
			})
			.catch((err)=>{
				ADCore.comm.error(res, err, 500);
			})

        })
        .fail((err)=>{
        	ADCore.comm.error(res, err, 400);
        })


    },


    update:function(req, res) {

        var id = req.param('id');
        if (!id) {

            AD.comm.error(res, new Error('no id provided'));
            return;
        }

        
        var languageCodeUser = ADCore.user.current(req).getLanguageCode();


		async.series([

			// update the base value
			(next)=>{
				var values = valuesData(req);

				// if they passed in data values to update:
				if (Object.keys(values).length > 0) {

					FCFLocation.update({id:id}, values)
					.exec((err, data)=>{
						if (err) {
							next(err);
							return;
						}

						next();
					})
				} else {
					next();
				}

			},


			// update the translation values
			(next)=>{
				var values = valuesTrans(req);

				// if they passed in translation values to update:
				if (Object.keys(values).length > 0) {

					var where = {
						fcflocation:id,
						language_code: values.language_code || languageCodeUser
					}
					delete values.language_code;

					FCFLocationTrans.update(where, values)
					.exec((err, data)=>{
						if (err) {
							next(err);
							return;
						}

						next();
					})

				} else {
					next();
				}

			}
		], (err, data)=>{

			if (err) {
				ADCore.comm.error(res, err);
            	return;
			}

			// now respond with an updated copy of our location:
			FCFLocation.findOne({id:id})
			.populate('translations')
			.then((location)=>{

				var list = [location];
				flatten(languageCodeUser, list);

				location.translation = undefined;
				ADCore.comm.success(res, location);
			})
			.catch((err)=>{
				ADCore.comm.error(res, err, 500);
			})

		});  // end async.series()
    },


    destroy:function(req, res) {

        var id = req.param('id');
        if (!id) {
            AD.comm.error(res, new Error('no id provided'));
            return;
        }

        var criteria = { id:id };
        var languageCodeUser = ADCore.user.current(req).getLanguageCode();
        var removed = null;


		async.series([

			// Get the Entries that we will remove:
			(next)=>{

				// now respond with an updated copy of our location:
				FCFLocation.findOne(criteria)
				.populate('translations')
				.then((location)=>{

					var list = [location];
					flatten(languageCodeUser, list);

					location.translation = undefined;
					removed = location;
					next();
				})
				.catch((err)=>{
					next(err);
				})

			},


			// update the translation values
			(next)=>{

				FCFLocation.destroy(criteria)
				.then((listRemoved)=>{

					if (listRemoved.length > 0) {

						var transCriteria = {
							fcflocation:[]
						}
						listRemoved.forEach((l)=>{
							transCriteria.fcflocation.push(l.id);
						})
console.log('... transCriteria:', transCriteria);
						FCFLocationTrans.destroy(transCriteria)
						.then((listTRemoved)=>{
							next();
						})
						.catch(next);

					} else {
						next();
					}

				})
				.catch((err)=>{
					next(err);
				})

			}
		], (err, data)=>{

			if (err) {
				ADCore.comm.error(res, err);
            	return;
			}

			ADCore.comm.success(res, removed);
		});  // end async.series()

    } // end destroy()

};

function valuesFromParams(req, fields) {
	var values = {};
	fields.forEach((f)=>{
		var val = req.param(f);
		if (val)
		values[f] = val; 
	})

	return values;
}
function valuesData(req) {
	return valuesFromParams(req, dataFields());
}
function valuesTrans(req) {
	return valuesFromParams(req, translationFields());
}

function translationFields() {
	var fields = [];
	var ignoreFields = [ 'id', 'createdAt', 'updatedAt' ];
	ignoreFields.push( FCFLocation.attributes.translations.via);
	for (var k in FCFLocationTrans.attributes) {
		if (ignoreFields.indexOf(k) == -1 ) {
			fields.push(k);
		}
	}
	return fields;
}


function allFields() {
	var fields = [];
	dataFields().forEach((f)=>{
		fields.push(f);
	})
	translationFields().forEach((f)=>{
		fields.push(f);
	})
	return fields;
}


function dataFields() {
	var fields = [];
	for (var k in FCFLocation.attributes) {
		fields.push(k);
	}
	return fields;
}



function requiredFields() {
	var fields = [];
	var fieldList = allFields();

	fieldList.forEach((f)=>{
		if (FCFLocation.attributes[f]) {
			if (FCFLocation.attributes[f].required) {
				fields.push(f);
			}
		}
		if (FCFLocationTrans.attributes[f]) {
			if (FCFLocationTrans.attributes[f].required) {
				fields.push(f);
			}
		}
	})

	return fields;
}


function flatten(langCode, list) {
	var fields = translationFields();

	list.forEach((l)=>{

		// find appropriate translation (default to 1st one);
		var translation = l.translations[0];
		l.translations.forEach((t)=>{
			if (t.language_code == langCode) {
				translation = t;
			}
		})

		// copy translation fields to base:
		fields.forEach((f)=>{
			l[f] = translation[f];
		})

		l.translations = undefined;
	})

}