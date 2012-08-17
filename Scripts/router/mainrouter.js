/// <reference path="/Scripts/core/AppCore.js" />
/// <reference path="/Scripts/views/mainviews.js" />
(function () {

    AppCore.Router.MainRouter = Backbone.Router.extend({
        views: {},
        routes: {
            "main": "main"
        },
        events: {

        },
        initialize: function (options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            return this;
        },
        hideAllViews: function () {
            // hide all views that exist in this.views array.
            return _.select(_.map(this.views,
                            function (v) { return v.hide(); }),
                            function (t) { return t != null });
        },
        main: function () {
            //This will run at url #/main
            var mainView = new AppCore.Views.MainView();
            mainView.render();
            mainView.show();
        }
    });

})();