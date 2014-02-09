Ember.Handlebars.registerBoundHelper('humanDate', function(dateString) {

  return moment(parseInt(dateString,10)).calendar();
});