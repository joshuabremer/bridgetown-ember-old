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

Ember.Handlebars.registerBoundHelper('MCBadge', function(performerId,eventEmcees) {
    var badge = '<span class="badge">MC</span>';
    //console.log(performerId , eventEmcees , performerId !== eventEmcees)
    if (performerId && eventEmcees && performerId !== eventEmcees) {
      return "";
    }
    
    return new Handlebars.SafeString(badge);
    
});


Ember.Handlebars.registerBoundHelper('googleMapLink', function(address) {
  var html = "Address: <a target='blank' href='http://maps.google.com/?q=" + address + "'>" + address + " </a>";

  return new Handlebars.SafeString(html);
});

Ember.Handlebars.registerBoundHelper('fullDate', function(dateString) {
  return moment(dateString).zone('-07:00').calendar();
});

Ember.Handlebars.registerBoundHelper('niceDate', function(dateString) {
  return moment(dateString).zone('-07:00').format("dddd, MMMM Do YYYY");
});

Ember.Handlebars.registerBoundHelper('getWeekday', function(dateString) {
  return moment(dateString).zone('-07:00').format('dddd');
});

Ember.Handlebars.registerBoundHelper('getMonth', function(dateString) {
  return moment(dateString).zone('-07:00').format('MMM');
});

Ember.Handlebars.registerBoundHelper('getDayOfMonth', function(dateString) {
  return moment(dateString).zone('-07:00').format('D');
});

Ember.Handlebars.registerBoundHelper('getTime', function(dateString) {
  return moment(dateString).zone('-07:00').format('h:mm a');
});




Ember.Handlebars.registerHelper('scheduleTableHeaderRow', function(day) {
  var html = "<th>Venue</th>";
  var timeArray = getTimeArray(day);
  $.each(timeArray,function(index, time) {
    var $el = $('<tr><th class="schedule-table__time-header" data-start-time="' + time.toISOString() + '">' + time.format('MM/DD ') + '<br />' + time.format('h:mm a') + '</th></tr>');
    html += $el.html();
  });
  return new Handlebars.SafeString(html);
});


function getTimeArray(day) {
  var timeArray = [];
  var duration = moment(FESTIVAL_END_TIMES[day]).diff(FESTIVAL_START_TIMES[day],'hours');
  for(i=0;i<duration*2;i++) {
    timeArray.push(moment(FESTIVAL_START_TIMES[day]).add(i*30,'minutes'));
  }
  return timeArray;
  
}




