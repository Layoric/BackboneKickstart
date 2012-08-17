/// <reference path="/Scripts/jquery-1.7.2.js" />
/// <reference path="/Scripts/underscore.js" />
/// <reference path="/Scripts/backbone.js" />


// This object is just to wrap the core types of your objects and also to help with intellisense in VS.
// All new js files for views, routers, models or collections use have '/// <reference path="/Scripts/core/AppCore.js" />' at the top
// The default.html page should contain the referenced scripts above or new versions in the same order as shown
// Next this file, and then custom Models, then collections, views and finally the main router to kick off the app
// NOTE: This is just one of many ways to structure your Backbone app, it's one I have found simple and easy to maintain
// Another benefit of using the design is that use of build tools like script compression is simple and just follows the same
// order as you are including scripts to compress into a single script
(function () {
    window.AppCore = {
        Models: {

        },
        Collections: {

        },
        Views: {
            // View that extends BaseView needs to have a 'parent' object that is a Jquery DOM object, eg, parent: $('#main')
            BaseView: Backbone.View.extend({
                className: 'viewport',
                // Hides all on init. Injects viewport.
                initialize: function () {
                    this.el = $(this.el);
                    this.el.hide();
                    this.parent.html(this.el);
                    return this;
                },

                //hide(0... is being used as IE doesn't render the hide animation too well
                hide: function () {
                    if (this.el.is(":visible") === false) {
                        return null;
                    }
                    promise = $.Deferred(_.bind(function (dfd) {
                        this.el.hide(0, dfd.resolve)
                    }, this));
                    return promise.promise();
                },
                // fadeIn is still using an animation cause it works 'OK' and well, looks cool.
                show: function () {
                    if (this.el.is(':visible')) {
                        return;
                    }
                    promise = $.Deferred(_.bind(function (dfd) {
                        this.el.fadeIn('fast', dfd.resolve);
                    }, this));
                    return promise.promise();
                }
            })
        },
        Router: {

        },
        Events: {
            // This creates another instance of events to use for pub/sub events between views
            // This separation avoids problems with Backbone view events. eg, events: { 'foo': 'bar' }. These events will be separated
            CoreEvents: _.extend({}, Backbone.Events)
        },
        Utils: {
            // Hash of preloaded templates for the app    
            templates: {},
            // Recursively pre-load all the templates for the app.    
            // This implementation should be changed in a production environment. All the template files should be    
            // concatenated in a single file.    
            loadTemplates: function (names, callback) {
                var self = this;
                var loadTemplate = function (index) {
                    var name = names[index];
                    //console.log('Loading template: ' + name);
                    $.get('Templates/' + name + '.html', function (data) {
                        self.templates[name] = data;
                        index++;
                        if (index < names.length) {
                            loadTemplate(index);
                        }
                        else {
                            callback();
                        }
                    });
                }
                loadTemplate(0);
            },
            // Get template by name from hash of preloaded templates    
            getTemplate: function (name) {
                return this.templates[name];
            },
            startApp: function (options) {
                new AppCore.Router.MainRouter();
            }
        }
    }
})();