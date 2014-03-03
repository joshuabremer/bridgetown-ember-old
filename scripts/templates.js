Ember.TEMPLATES['_footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Performers");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("History");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Press");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<!-- FOOTER -->\n  <footer class=\"site-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"social\">\n  <ul class=\"social-buttons\">\n    <li class=\"follow-btn\">\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"bridgetown\"  data-related=\"bridgetown\" data-hashtags=\"bridgetowncomedy\">Tweet</a>\n    </li>\n    <li class=\"tweet-btn\">\n      <a href=\"https://twitter.com/bridgetown\" class=\"twitter-follow-button\" data-show-count=\"false\" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href=\"http://twitter.com/joshuabremer\" target=\"_blank\">@joshuabremer</a>. Powered by <a target=\"_blank\" href=\"http://squarespace.com/\">Squarespace</a></p>\n    <ul class=\"footer-links muted\">\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "history", options) : helperMissing.call(depth0, "link-to", "history", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li><a href=\"../about/\">About</a></li>\n      <li>·</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
  
});Ember.TEMPLATES['_header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("BCF 2014");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<span>Home</span>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<span>Performers</span>");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<span>History</span>");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<span>Press</span>");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("<span>Contact</span>");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"header-color1\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n       \n        <li class=\"header-color3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "history", options) : helperMissing.call(depth0, "link-to", "history", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color4\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        \n\n        <li class=\"header-color5\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        \n      </ul>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['_news'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div class=\"newspost\">\n  <h3 class=\"newspost-title\">2014 Site is Up!</h3>\n  <p>March, 10th, 2014</p>\n  <div class=\"newspost-content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n</div>\n\n\n\n");
  
});Ember.TEMPLATES['_recent_tweets'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n\n  \n  <div class=\"main-content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "jumbotron", options) : helperMissing.call(depth0, "outlet", "jumbotron", options))));
  data.buffer.push("\n      </div>\n    </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n\n\n  <!-- MODAL FOR CONTACT -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">contact us</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row centered\">\n              <p>We are available 24/7, so don't hesitate to contact us.</p>\n              <p>\n                Somestreet Ave, 987<br/>\n            London, UK.<br/>\n            +44 8948-4343<br/>\n            hi@blacktie.co\n              </p>\n              <div id=\"mapwrap\">\n   \n          </div>  \n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n");
  return buffer;
  
});Ember.TEMPLATES['catch_all'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class=\"container\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-4\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class=\"container\">\n  ");
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
  
});Ember.TEMPLATES['history'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-color-3\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-color-5 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Bridgetown Comedy Festival 2014</h1>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"row\">\n<div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-sm-6\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "partial", "news", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-sm-6 hidden-xs\">\n        <h3>@bridgetown</h3>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recent_tweets", options) : helperMissing.call(depth0, "partial", "recent_tweets", options))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br>\n    <br>\n  </div><!-- container -->\n</div>\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "partial", "sponsors", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});Ember.TEMPLATES['jumbotron_index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-color-5  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Bridgetown Comedy Festival 2014</h1>\n      <h2>May 8th - May 11th</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->");
  
});Ember.TEMPLATES['loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(" <div class=\"row\"> <div class=\"jumbotron jumbotron-default\">\n \n   <div class=\"container\">\n    <h1 class=\"text-center\">Loading...</h1>\n    <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression((helper = helpers['x-spinner'] || (depth0 && depth0['x-spinner']),options={hash:{
    'lines': (12),
    'radius': (10),
    'length': (10),
    'shadow': (false),
    'color': ("#333"),
    'width': (3)
  },hashTypes:{'lines': "INTEGER",'radius': "INTEGER",'length': "INTEGER",'shadow': "BOOLEAN",'color': "STRING",'width': "INTEGER"},hashContexts:{'lines': depth0,'radius': depth0,'length': depth0,'shadow': depth0,'color': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-spinner", options))));
  data.buffer.push("</h1>\n    </div>\n  </div>\n</div>");
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
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

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

  data.buffer.push(escapeExpression((helper = helpers.debug || (depth0 && depth0.debug),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller", options) : helperMissing.call(depth0, "debug", "controller", options))));
  data.buffer.push("\n ");
  stack1 = helpers.each.call(depth0, "newspost", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("← All Performers");
  }

  data.buffer.push("\n  <div class=\"jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h2>");
  stack1 = helpers._triageMustache.call(depth0, "Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container single-performer\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("headshot300")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </p>\n      <p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performers'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.PerformersView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['performers_gallery'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n    <div class=\"performer-thumbnail\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <legend>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</legend>\n  </div>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img class=\"lazy img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-original': ("performer.headshot300")
  },hashTypes:{'data-original': "STRING"},hashContexts:{'data-original': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "performer.Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n<div class=\"jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2\">\n      <h1>Performers</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class=\"row\">\n  ");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['press'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container\">\n  ");
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


  data.buffer.push("\n  <div class=\"jumbotron jumbotron-minor jumbotron-color-5  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "collection.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});