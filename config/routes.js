/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /companies' : 'CompanyController.create',
    'GET /companies' : 'CompanyController.find',
    'GET /companies/:id' : 'CompanyController.findOne',
    'PATCH /companies/:id' : 'CompanyController.update',
    //Job
    'POST /jobs': 'JobController.create',
    'GET /jobs': 'JobController.find',
  //Application
    'POST /applications': 'ApplicationController.create',
    'GET /applications': 'ApplicationController.find',
  //User
    'POST /user/login': 'UserController.login',
    'POST /user/signup': 'UserController.signup'
};
