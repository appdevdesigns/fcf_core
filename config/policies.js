/**
 * Policy mappings (ACL)
 *
 * Policies are simply Express middleware functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect just one of its actions.
 *
 * Any policy file (e.g. `authenticated.js`) can be dropped into the `/policies` folder,
 * at which point it can be accessed below by its filename, minus the extension, (e.g. `authenticated`)
 *
 * For more information on policies, check out:
 * http://sailsjs.org/#documentation
 */

// var path = require('path');
// var ADCore = require(path.join(process.cwd(), 'api', 'services', 'ADCore.js'));
// var serviceStack = ADCore.policy.serviceStack([ 'canOpsPortal', 'opsPortalUserConfig' ]);

module.exports = {

//    'fcf_core/YourController': {
//        method: ['isAuthenticatedService'],
//        auth: [],
//        sync:[ 'isAuthenticatedService',
//               'NSServerDevelopTools',
//               'NSServerValidateUser',
//               'NSServerDownloadFromMothership',
//               'NSServerPrepareOutgoingData',
//               'NSServerProcessClientData',
//               'NSServerUploadToMothership'
//               ],
//       logout:true
//    }


};
