Ember.TEMPLATES['_recent_tweets'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<a class=\"twitter-timeline\" href=\"https://twitter.com/bridgetown\" data-widget-id=\"432300245716713474\">Tweets by @bridgetown</a>\n\n\n\n");
  
});Ember.TEMPLATES['_sponsors'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"lg\">\n  <div class=\"container w\">\n    <h1>SPONSORS</h1>\n    <div class=\"row centered\">\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c01.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c02.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c03.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c04.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c05.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c05.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c01.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c02.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c03.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c04.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c05.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class=\"col-xs-4 col-sm-3 col-md-2\">\n        <img class=\"img-responsive\" src=\"assets/c05.gif\" alt=\"\">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n    </div><!-- row -->\n  </div><!-- container -->\n</div>");
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.HeaderView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n  \n  ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "jumbotron", options) : helperMissing.call(depth0, "outlet", "jumbotron", options))));
  data.buffer.push("\n  <div class=\"container\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n<!-- FOOTER -->\n  <div id=\"site-footer\">\n    <div class=\"container text-center\">\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    </div><!-- container -->\n  </div><!-- Footer -->\n\n\n  <!-- MODAL FOR CONTACT -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">contact us</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row centered\">\n              <p>We are available 24/7, so don't hesitate to contact us.</p>\n              <p>\n                Somestreet Ave, 987<br/>\n            London, UK.<br/>\n            +44 8948-4343<br/>\n            hi@blacktie.co\n              </p>\n              <div id=\"mapwrap\">\n   \n          </div>  \n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n");
  return buffer;
  
});Ember.TEMPLATES['catch_all'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("New Event");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.start_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.end_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "event.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "linkTo", "event", "event", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("view");
  }

  data.buffer.push("<h2>Events</h2>\n\n");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new_events", options) : helperMissing.call(depth0, "linkTo", "new_events", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "event", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("BCF 2014");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Performers");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Venues");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Shows");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("History");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Press");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Tickets");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "venues", options) : helperMissing.call(depth0, "link-to", "venues", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "history", options) : helperMissing.call(depth0, "link-to", "history", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        \n      </ul>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['history'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div class=\"container w\">\n    <div class=\"row centered\">\n      <div class=\"col-md-6\">\n        <h4>NEWS</h4>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "newsposts", "controller", options) : helperMissing.call(depth0, "render", "newsposts", "controller", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-md-6 hidden-sm hidden-xs\">\n        <h4>@bridgetown</h4>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recent_tweets", options) : helperMissing.call(depth0, "partial", "recent_tweets", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br>\n    <br>\n  </div><!-- container -->\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "partial", "sponsors", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});Ember.TEMPLATES['jumbotron_index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-dark\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      \n      <h2>May ##, 2014</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->");
  return buffer;
  
});Ember.TEMPLATES['jumbotron_performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-dark\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->");
  return buffer;
  
});Ember.TEMPLATES['loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("  <div class=\"jumbotron\" style=\"background:transparent;\">\n \n   <div class=\"container\">\n    <h1 class=\"text-center\">Loading...</h1>\n    <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression((helper = helpers['x-spinner'] || (depth0 && depth0['x-spinner']),options={hash:{
    'lines': (12),
    'radius': (10),
    'length': (10),
    'shadow': (false),
    'color': ("#333"),
    'width': (3)
  },hashTypes:{'lines': "INTEGER",'radius': "INTEGER",'length': "INTEGER",'shadow': "BOOLEAN",'color': "STRING",'width': "INTEGER"},hashContexts:{'lines': depth0,'radius': depth0,'length': depth0,'shadow': depth0,'color': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-spinner", options))));
  data.buffer.push("</h1>\n    </div>\n  </div>");
  return buffer;
  
});Ember.TEMPLATES['newspost'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  <div>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "htmlContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['newsposts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"newspost\">\n      <h3 class=\"newspost-title\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "newspost", "newspost", options) : helperMissing.call(depth0, "link-to", "newspost", "newspost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n      <p>");
  data.buffer.push(escapeExpression((helper = helpers.humanDate || (depth0 && depth0.humanDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "newspost.publishOn", options) : helperMissing.call(depth0, "humanDate", "newspost.publishOn", options))));
  data.buffer.push("</p>\n      <div class=\"newspost-content\">");
  stack1 = (helper = helpers.createExcerpt || (depth0 && depth0.createExcerpt),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","INTEGER","STRING"],data:data},helper ? helper.call(depth0, "newspost.htmlContent", 100, "... Read More...", options) : helperMissing.call(depth0, "createExcerpt", "newspost.htmlContent", 100, "... Read More...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n    <hr />\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "newspost.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push(" ");
  stack1 = helpers.each.call(depth0, "newspost", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "category.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("←All Performers");
  }

  data.buffer.push("<div class=\"container\">\n  <h2>Performer</h2>\n\n<p>\n  <b>Name:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n<p>\n  <b>Headshot:</b> <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n</p>\n\n<p>\n  <b>Bio:</b> ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n<p>\n  <b>Categories:</b> ");
  stack1 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-sm-6 col-sm-4 col-md-3 col-lg-2\">\n    <img class=\"img-responsive\" data-image-dimensions={300x300} ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("performer.headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n    <legend>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</legend>\n  </div>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "performer.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"row\">\n  ");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['press'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['shows'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['venues'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});