Ember.Handlebars.registerBoundHelper('createExcerpt', function(html, length, more_text) {
  var item_html = html.replace(/<\/?[^>]+>/gi, ''); //replace html tags
  item_html = jQuery.trim(item_html);  //trim whitespace
  return item_html.substring(0,length) + more_text;
});