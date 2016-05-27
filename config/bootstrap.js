/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */
var path = require('path');
var AD = require('ad-utils');
module.exports = function (cb) {

    AD.module.permissions(path.join(__dirname, '..', 'setup', 'permissions'), cb);
    // cb(err);   // in case of an unrecoverable error


    ADCore.queue.subscribe('siteuser.created', function(message, data) {

    	var user = data.user;

    	AD.log('<green>... FCF:</green> checking new user to see if we can find a match with FCF Persons');
    	AD.log('<green>... FCF:</green> new user:'+ user.username);
    	

		// check to see if we can make a link between the new siteuser 
		// and one of our people.
		GUID2Person.findOne({ guid: user.guid })
		.populate('person')
		.then(function(entry){

			if (entry) {
				// then this data.user.guid ALREADY has an entry in guid2person
				// which really shouldn't happen!
				ADCore.error.log('Error: new user [guid:'+user.guid+'] already found in GUID2Person!', {
					data:user,
					guid2person:entry
				});

			} else {

				// not found (good!)
				var cond = { "e-mail address" : user.email };
				FCFPerson.find(cond)
				.then(function(list){
					if (list.length == 0) {
						AD.log('... no FCFPerson found for new user with email: '+user.email);
					} else {

						if (list.length > 1) {

							AD.log('... found '+list.length+' matches in FCFPerson for new user with email: '+user.email);
						} else {

							//just 1 match!
							var pid = list[0].IDPerson;
							var g2p = { guid: user.guid, person:pid };
							GUID2Person.create(g2p)
							.then(function(newEntry){
								AD.log('... created guid2person for new user: '+user.username+' -> '+pid );
								return null;
							})
							.catch(function(err){
								ADCore.error.log('fcf_core: Error creating new guid2person entry', {
									error:err,
									data: g2p
								});
								return null;
							})
						}
					}
					return null;
				})
				.catch(function(err){
					ADCore.error.log('fcf_core: Error looking up FCFPerson', {
						error:err,
						cond: cond
					});
					return null;
				})
			}

			return null;
		})

    });


//     ADCore.queue.subscribe('siteuser.updated', function(message, data) {
// console.log('... fcf_core: '+message);
// console.log('... fcf_core: ', data);    	
//     })


//     ADCore.queue.subscribe('siteuser.destroyed', function(message, data) {
// console.log('... fcf_core: '+message);
// console.log('... fcf_core: ', data);    	
//     })
};