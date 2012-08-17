/// <reference path="/Scripts/core/AppCore.js" />
(function () {

    AppCore.Views.MainView = AppCore.Views.BaseView.extend({
        template: {},
        parent: $('#mainView'),
        initialize: function (options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.template = _.template(AppCore.Utils.getTemplate('main_page'));
        },
        render: function (eventName) {
            this.el.html(this.template());
            return this;
        }
    });

    AppCore.Views.MainItemView = AppCore.Views.BaseView.extend({
        template: {},
        parent: $('#mainView'),
        initialize: function (options) {
            this.constructor.__super__.initialize.apply(this, [options]);
            this.template = _.template(AppCore.Utils.getTemplate('main_page'));
        },
        render: function (eventName) {
            //this.el.html(this.template({ 'main': this.model.toJSON() }));
            return this;
        }
    });

})();