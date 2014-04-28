App.Venue = DS.Model.extend({

  events: DS.hasMany('event', {async: true}),

  Name: DS.attr('string'),

  pageUrl: DS.attr('string'),

  saturdayEvents: function() {
    var events = this.get('events').toArray();
    var saturdayEvents = [];
    $.each(events,function(index,event) {
      console.log(moment(event.get('start_time')).format('dddd'));
      if (moment(event.get('start_time')).format('dddd') === 'Friday') {
        saturdayEvents.push(event);
      }
    })
    return saturdayEvents;
  }.property('events.@each.isLoaded')  

});