//https://bridgetown-dev.squarespace.com/performers/?format=json-pretty

var Performer = DS.Model.extend({

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  bio: DS.attr('string')

});

module.exports = Performer;

