
Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<div class='container'>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES['edit_events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>Events</h2>\n\n<form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  \n  <p>\n    <label for=\"name\">Name</label><br>\n    ");
  hashContexts = {'valueBinding': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("name"),
    'id': ("name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </p>\n  \n  <p>\n    <label for=\"start_time\">Start time</label><br>\n    ");
  hashContexts = {'valueBinding': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("start_time"),
    'id': ("start_time")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </p>\n  \n  <p>\n    <label for=\"end_time\">End time</label><br>\n    ");
  hashContexts = {'valueBinding': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("end_time"),
    'id': ("end_time")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </p>\n  \n  <p>\n    <label for=\"price\">Price</label><br>\n    ");
  hashContexts = {'valueBinding': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("price"),
    'id': ("price")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </p>\n  \n  <p>\n    <button type=\"submit\">Save</button>\n  </p>\n\n</form>\n\n");
  return buffer;
  
});

Ember.TEMPLATES['events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("New Event");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <tr>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.start_time", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.end_time", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.price", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "event", "event", options) : helperMissing.call(depth0, "linkTo", "event", "event", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("view");
  }

  data.buffer.push("<h2>Events</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "new_events", options) : helperMissing.call(depth0, "linkTo", "new_events", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "event", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </tbody>\n</table>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES['header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Ember App");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Performers");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("News");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Tickets");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "newsposts", options) : helperMissing.call(depth0, "link-to", "newsposts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li class=\"divider\"></li>\n            <li class=\"dropdown-header\">Nav header</li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>Index</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "newsposts", "controller", options) : helperMissing.call(depth0, "render", "newsposts", "controller", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES['newspost'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("←All Newsposts");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

  data.buffer.push("<h2>Newspost</h2>\n\n<p>\n  <b>Name:</b> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</p>\n\n<p>\n  <b>Bio:</b> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "bio", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</p>\n\n<p>\n  <b>Headshot:</b> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "headshot", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</p>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "newsposts", options) : helperMissing.call(depth0, "link-to", "newsposts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "edit_newspost", "model", options) : helperMissing.call(depth0, "link-to", "edit_newspost", "model", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n<a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "destroy", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Destroy</a>\n");
  return buffer;
  
});

Ember.TEMPLATES['newsposts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("New Newspost");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <tr>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newspost.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newspost.bio", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newspost.headshot", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "newspost", "newspost", options) : helperMissing.call(depth0, "link-to", "newspost", "newspost", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("view");
  }

  data.buffer.push("<h2>Newsposts</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "new_newspost", options) : helperMissing.call(depth0, "link-to", "new_newspost", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<table>\n  <thead>\n    <th>name</th>\n    <th>bio</th>\n    <th>headshot</th>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "newspost", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </tbody>\n</table>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("←All Performers");
  }

  data.buffer.push("<h2>Performer</h2>\n\n<p>\n  <b>Name:</b> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</p>\n\n<p>\n  <b>Headshot:</b> <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("performer.headshot")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" />\n</p>\n\n<p>\n  <b>Bio:</b> ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</p>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n<a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "destroy", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Destroy</a>\n");
  return buffer;
  
});

Ember.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"col-sm-3\">\n      <p><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("performer.headshot")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" /></p>\n      <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES['templates.js'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\nEmber.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;\n\n\n  data.buffer.push(\"\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers.view.call(depth0, \"App.HeaderView\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n\\n<div class='container'>\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"outlet\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n</div>\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['edit_events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;\n\n\n  data.buffer.push(\"<h2>Events</h2>\\n\\n<form \");\n  hashContexts = {'on': depth0};\n  hashTypes = {'on': \"STRING\"};\n  data.buffer.push(escapeExpression(helpers.action.call(depth0, \"save\", {hash:{\n    'on': (\"submit\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\">\\n  \\n  <p>\\n    <label for=\\\"name\\\">Name</label><br>\\n    \");\n  hashContexts = {'valueBinding': depth0,'id': depth0};\n  hashTypes = {'valueBinding': \"STRING\",'id': \"STRING\"};\n  data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n    'valueBinding': (\"name\"),\n    'id': (\"name\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n  </p>\\n  \\n  <p>\\n    <label for=\\\"start_time\\\">Start time</label><br>\\n    \");\n  hashContexts = {'valueBinding': depth0,'id': depth0};\n  hashTypes = {'valueBinding': \"STRING\",'id': \"STRING\"};\n  data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n    'valueBinding': (\"start_time\"),\n    'id': (\"start_time\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n  </p>\\n  \\n  <p>\\n    <label for=\\\"end_time\\\">End time</label><br>\\n    \");\n  hashContexts = {'valueBinding': depth0,'id': depth0};\n  hashTypes = {'valueBinding': \"STRING\",'id': \"STRING\"};\n  data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n    'valueBinding': (\"end_time\"),\n    'id': (\"end_time\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n  </p>\\n  \\n  <p>\\n    <label for=\\\"price\\\">Price</label><br>\\n    \");\n  hashContexts = {'valueBinding': depth0,'id': depth0};\n  hashTypes = {'valueBinding': \"STRING\",'id': \"STRING\"};\n  data.buffer.push(escapeExpression(helpers.view.call(depth0, \"Ember.TextField\", {hash:{\n    'valueBinding': (\"price\"),\n    'id': (\"price\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n  </p>\\n  \\n  <p>\\n    <button type=\\\"submit\\\">Save</button>\\n  </p>\\n\\n</form>\\n\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['events'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  data.buffer.push(\"New Event\");\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;\n  data.buffer.push(\"\\n    <tr>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"event.name\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"event.start_time\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"event.end_time\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"event.price\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, \"event\", \"event\", options) : helperMissing.call(depth0, \"linkTo\", \"event\", \"event\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</td>\\n    </tr>\\n    \");\n  return buffer;\n  }\nfunction program4(depth0,data) {\n  \n  \n  data.buffer.push(\"view\");\n  }\n\n  data.buffer.push(\"<h2>Events</h2>\\n\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, \"new_events\", options) : helperMissing.call(depth0, \"linkTo\", \"new_events\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n\\n<table>\\n  <thead>\\n    <th>name</th>\\n    <th>start_time</th>\\n    <th>end_time</th>\\n    <th>price</th>\\n  </thead>\\n  <tbody>\\n    \");\n  hashTypes = {};\n  hashContexts = {};\n  stack2 = helpers.each.call(depth0, \"event\", \"in\", \"controller\", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n  </tbody>\\n</table>\\n\\n\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  data.buffer.push(\"Ember App\");\n  }\n\nfunction program3(depth0,data) {\n  \n  \n  data.buffer.push(\"Home\");\n  }\n\nfunction program5(depth0,data) {\n  \n  \n  data.buffer.push(\"Performers\");\n  }\n\nfunction program7(depth0,data) {\n  \n  \n  data.buffer.push(\"News\");\n  }\n\nfunction program9(depth0,data) {\n  \n  \n  data.buffer.push(\"Tickets\");\n  }\n\n  data.buffer.push(\"<div class=\\\"navbar navbar-inverse navbar-fixed-top\\\">\\n  <div class=\\\"container\\\">\\n    <div class=\\\"navbar-header\\\">\\n      <button type=\\\"button\\\" class=\\\"navbar-toggle\\\" data-toggle=\\\"collapse\\\" data-target=\\\".navbar-collapse\\\">\\n        <span class=\\\"icon-bar\\\"></span>\\n        <span class=\\\"icon-bar\\\"></span>\\n        <span class=\\\"icon-bar\\\"></span>\\n      </button>\\n      \");\n  hashContexts = {'class': depth0};\n  hashTypes = {'class': \"STRING\"};\n  options = {hash:{\n    'class': (\"navbar-brand\")\n  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"\", options) : helperMissing.call(depth0, \"link-to\", \"\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n    </div>\\n    <div class=\\\"navbar-collapse collapse\\\">\\n      <ul class=\\\"nav navbar-nav\\\">\\n        <li>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"index\", options) : helperMissing.call(depth0, \"link-to\", \"index\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</li>\\n        <li>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"performers\", options) : helperMissing.call(depth0, \"link-to\", \"performers\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</li>\\n        <li>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"newsposts\", options) : helperMissing.call(depth0, \"link-to\", \"newsposts\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</li>\\n        <li>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"performers\", options) : helperMissing.call(depth0, \"link-to\", \"performers\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</li>\\n        <li class=\\\"dropdown\\\">\\n          <a href=\\\"#\\\" class=\\\"dropdown-toggle\\\" data-toggle=\\\"dropdown\\\">Dropdown <b class=\\\"caret\\\"></b></a>\\n          <ul class=\\\"dropdown-menu\\\">\\n            <li><a href=\\\"#\\\">Action</a></li>\\n            <li><a href=\\\"#\\\">Another action</a></li>\\n            <li><a href=\\\"#\\\">Something else here</a></li>\\n            <li class=\\\"divider\\\"></li>\\n            <li class=\\\"dropdown-header\\\">Nav header</li>\\n            <li><a href=\\\"#\\\">Separated link</a></li>\\n            <li><a href=\\\"#\\\">One more separated link</a></li>\\n          </ul>\\n        </li>\\n      </ul>\\n    </div><!--/.navbar-collapse -->\\n  </div>\\n</div>\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n  data.buffer.push(\"<h2>Index</h2>\\n\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, \"newsposts\", \"controller\", options) : helperMissing.call(depth0, \"render\", \"newsposts\", \"controller\", options))));\n  data.buffer.push(\"\\n\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['newspost'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  data.buffer.push(\"←All Newsposts\");\n  }\n\nfunction program3(depth0,data) {\n  \n  \n  data.buffer.push(\"Edit\");\n  }\n\n  data.buffer.push(\"<h2>Newspost</h2>\\n\\n<p>\\n  <b>Name:</b> \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"name\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n</p>\\n\\n<p>\\n  <b>Bio:</b> \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"bio\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n</p>\\n\\n<p>\\n  <b>Headshot:</b> \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"headshot\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n</p>\\n\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"newsposts\", options) : helperMissing.call(depth0, \"link-to\", \"newsposts\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"edit_newspost\", \"model\", options) : helperMissing.call(depth0, \"link-to\", \"edit_newspost\", \"model\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n<a href=\\\"#\\\" \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers.action.call(depth0, \"destroy\", {hash:{},contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\">Destroy</a>\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['newsposts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  data.buffer.push(\"New Newspost\");\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;\n  data.buffer.push(\"\\n    <tr>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"newspost.name\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"newspost.bio\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"newspost.headshot\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"</td>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"newspost\", \"newspost\", options) : helperMissing.call(depth0, \"link-to\", \"newspost\", \"newspost\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</td>\\n    </tr>\\n    \");\n  return buffer;\n  }\nfunction program4(depth0,data) {\n  \n  \n  data.buffer.push(\"view\");\n  }\n\n  data.buffer.push(\"<h2>Newsposts</h2>\\n\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"new_newspost\", options) : helperMissing.call(depth0, \"link-to\", \"new_newspost\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n\\n<table>\\n  <thead>\\n    <th>name</th>\\n    <th>bio</th>\\n    <th>headshot</th>\\n  </thead>\\n  <tbody>\\n    \");\n  hashTypes = {};\n  hashContexts = {};\n  stack2 = helpers.each.call(depth0, \"newspost\", \"in\", \"controller\", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n  </tbody>\\n</table>\\n\\n\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;\n\nfunction program1(depth0,data) {\n  \n  \n  data.buffer.push(\"←All Performers\");\n  }\n\n  data.buffer.push(\"<h2>Performer</h2>\\n\\n<p>\\n  <b>Name:</b> \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"name\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n</p>\\n\\n<p>\\n  <b>Headshot:</b> <img \");\n  hashContexts = {'src': depth0};\n  hashTypes = {'src': \"STRING\"};\n  options = {hash:{\n    'src': (\"performer.headshot\")\n  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, \"bind-attr\", options))));\n  data.buffer.push(\" />\\n</p>\\n\\n<p>\\n  <b>Bio:</b> \");\n  hashContexts = {'unescaped': depth0};\n  hashTypes = {'unescaped': \"STRING\"};\n  stack2 = helpers._triageMustache.call(depth0, \"body\", {hash:{\n    'unescaped': (\"true\")\n  },contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n</p>\\n\\n\\n\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"performers\", options) : helperMissing.call(depth0, \"link-to\", \"performers\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"\\n<a href=\\\"#\\\" \");\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers.action.call(depth0, \"destroy\", {hash:{},contexts:[depth0],types:[\"STRING\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  data.buffer.push(\">Destroy</a>\\n\");\n  return buffer;\n  \n});\n\nEmber.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;\n  data.buffer.push(\"\\n    <div class=\\\"col-sm-3\\\">\\n      <p><img \");\n  hashContexts = {'src': depth0};\n  hashTypes = {'src': \"STRING\"};\n  options = {hash:{\n    'src': (\"performer.headshot\")\n  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, \"bind-attr\", options))));\n  data.buffer.push(\" /></p>\\n      <td>\");\n  hashTypes = {};\n  hashContexts = {};\n  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};\n  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, \"performer\", \"performer\", options) : helperMissing.call(depth0, \"link-to\", \"performer\", \"performer\", options));\n  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }\n  data.buffer.push(\"</td>\\n    </div>\\n    \");\n  return buffer;\n  }\nfunction program2(depth0,data) {\n  \n  var hashTypes, hashContexts;\n  hashTypes = {};\n  hashContexts = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"performer.name\", {hash:{},contexts:[depth0],types:[\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));\n  }\n\n  data.buffer.push(\"<h2>Performers</h2>\\n<div class=\\\"container\\\">\\n  <div class=\\\"row\\\">\\n    \");\n  hashTypes = {};\n  hashContexts = {};\n  stack1 = helpers.each.call(depth0, \"performer\", \"in\", \"controller\", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});\n  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n  data.buffer.push(\"\\n  </div>\\n</div>\\n\\n\\n\");\n  return buffer;\n  \n});\n\n\n");
  
});


