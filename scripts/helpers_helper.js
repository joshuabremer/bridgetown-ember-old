Ember.Handlebars.registerBoundHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);

  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

Ember.Handlebars.registerBoundHelper('createExcerpt', function(html, length, more_text) {
  var item_html = html.replace(/<\/?[^>]+>/gi, ''); //replace html tags
  item_html = jQuery.trim(item_html);  //trim whitespace
  return item_html.substring(0,length) + more_text;
});

Ember.Handlebars.registerBoundHelper('humanDate', function(dateString) {
  return moment(parseInt(dateString,10)).calendar();
});