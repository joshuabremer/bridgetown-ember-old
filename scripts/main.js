require.config({
  paths : {
    underscore : 'lib_underscore',
    backbone   : 'lib_backbone',
    marionette : 'lib_backbone.marionette',
    jquery     : 'lib_jquery',
    tpl        : 'lib_tpl'
  }
});

// require(['app','backbone','routers/index','controllers/index'],function(app,Backbone,Router,Controller){
//   "use strict";

//   app.start();
//   new Router({
//     controller : Controller
//   });
//   Backbone.history.start();
// });
