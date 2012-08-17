/// <reference path="/Scripts/core/AppCore.js" />

(function () {
    //This is an example model setup for the standard Backbone Sync methods of create, destroy, fetch and save
    AppCore.Models.UserModel = Backbone.Model.extend({
        url: function () {
            return "/api/usermodel/id/" + this.userModelId;
        },
        initialize: function (options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        }
    });

    AppCore.Collections.UserCollection = Backbone.Collection.extend({
        model:AppCore.Models.UserModel,
        urlRoot: function () {
            return "/api/usermodel";
        },
        initialize: function (options) {
            this.constructor.__super__.initialize.apply(this, [options]);
        }
    });

})();