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

Ember.Handlebars.registerBoundHelper('fullDate', function(dateString) {
  return moment(dateString).calendar();
});

Ember.Handlebars.registerBoundHelper('getWeekday', function(dateString) {
  return moment(dateString).format('dddd');
});

Ember.Handlebars.registerBoundHelper('getMonth', function(dateString) {
  return moment(dateString).format('MMM');
});

Ember.Handlebars.registerBoundHelper('getDayOfMonth', function(dateString) {
  return moment(dateString).format('D');
});

Ember.Handlebars.registerBoundHelper('getTime', function(dateString) {
  return moment(dateString).format('h:mm a');
});




Ember.Handlebars.registerBoundHelper('scheduleTableRow', function(events) {
  var html;
  var timeArray = getTimeArray();
  $.each(timeArray,function() {
    var $el = $('<tr><td>1</td></tr>');
    html += $el.html();
    // $.each(events.toArray(),function(i,event){
    //   console.log(event.get('Name'));
    // });
  });
  return html;
});


function getTimeArray() {
  var timeArray = [];
  for(i=0;i<24;i++) {
    timeArray.push(moment("2014-04-04T07:00:00.818Z").add(i*30,'minutes'));
  }
  return timeArray;
  
}




