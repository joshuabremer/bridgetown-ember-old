App.Event = DS.Model.extend({

  performers: DS.hasMany('performer'),

  Name: DS.attr('string')

});
