'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var S8form = new Module('s8form');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
S8form.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  S8form.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  S8form.menus.add({
    title: 'Registros',
    link: 's8form example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  S8form.menus.add({
    title: 'Add',
    link: 's8form example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    S8form.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    S8form.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    S8form.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return S8form;
});
