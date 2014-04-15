App.ScheduleView = Ember.View.extend({
  didInsertElement:function(){
    Ember.run.scheduleOnce('afterRender', this, this.addListDividers);
  },
  addListDividers: function() {
    $('.schedule-list__spacer').remove();
    var currentTime = moment().subtract(100,'years').toISOString();
    $('.list-group-item').each(function() {
      var rowTime = $(this).data('start-time');
      if (rowTime !== currentTime) {
        currentTime = rowTime;
        var dateString = moment(currentTime).format('h:mm a - dddd MMMM Do YYYY');
        var weekday = moment(currentTime).format('dddd').toLowerCase();
        currentTime = $(this).data('start-time');

        $(this).before('<div class="list-group-item schedule-list__spacer ' + weekday + '"><div class="container-fluid"><div class="row"><div class="col-xs-12">' + dateString + '</div></div></div></div>');
      }
    })
  }
});