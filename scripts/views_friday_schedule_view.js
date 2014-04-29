App.FridayScheduleView = Ember.View.extend({
  didInsertElement:function(){
    Ember.run.scheduleOnce('afterRender', this, this.addTableColspans);
    
  },

  addTableColspans: function() {
    $('.cell-spacer').remove();
    $('.schedule-table__cell').each(function() {
      var startTime = $(this).data('start-time');
      var endTime = $(this).data('end-time');
      var duration = moment(endTime).diff(moment(startTime),'minutes') / 30;
      $(this).attr('colspan',duration);


      var previousTime = $(this).prevAll('.schedule-table__cell:eq(0)').data('end-time') || FESTIVAL_START_TIMES.Friday;
      var durationBefore = moment(startTime).diff(moment(previousTime),'minutes') / 30;
      if (durationBefore <= 0) return;
      $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>')
    });
  }
});