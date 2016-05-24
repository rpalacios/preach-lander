(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(S8form, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        var S8FormList = require('../controllers/s8formList')(S8form);

        app.get('/api/s8form', requiresLogin, S8FormList.list);

        app.get('/api/s8form/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/s8form/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/s8form/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/s8form/example/render', function(req, res) {
            S8form.render('index', {
                package: 's8form'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
    };
})();
