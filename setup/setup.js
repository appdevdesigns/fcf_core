
var path = require('path');
var fs = require('fs');

var AD = require('ad-utils');



(function() {

	AD.log();
	AD.log('<green>inserting our landing page:</green>');

    // let's overwrite the default view/page/opsportal.ejs  with our landing page:
    var pathLanding = path.join(__dirname, '..', '..', '..', 'views', 'page', 'opsportal.ejs');

    // remove the current one if it exists
    if (fs.existsSync(pathLanding)) {
		AD.log('<yellow>removing</yellow>:'+pathLanding);
    	fs.unlink(pathLanding);
    }

    // now link to our landing Page
    var ourLandingPage = path.join(__dirname, '..', '..', '..', 'views', 'fcf_core', 'landing.ejs');
    AD.log('<yellow>linking</yellow> : views/fcf_core/landing.ejs');
    try {
        fs.symlinkSync(ourLandingPage, pathLanding);
    } catch(e) {
console.log('... error:', e);

        AD.log('<yellow>!!! '+pathLanding+'  is already there!');
    }
    
    AD.log();



    var localOptions = {};

    // if there is a local options.js file, use that instead
    var pathOptions = path.join(__dirname,  'options.js');
    if (fs.existsSync(pathOptions)) {
        localOptions = require(pathOptions);
    }

    // NOTE: AD.module.setup() exits the script!
    AD.module.setup(localOptions);


})();