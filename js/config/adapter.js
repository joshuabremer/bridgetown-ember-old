//require('../vendor/localstorage_adapter');

DS.SquarespaceAdapter = DS.RESTAdapter.extend({
  buildURL: function(root, suffix, record) {
    var url = [this.url];

    Ember.assert("Namespace URL (" + this.namespace + ") must not start with slash", !this.namespace || this.namespace.toString().charAt(0) !== "/");
    Ember.assert("Root URL (" + root + ") must not start with slash", !root || root.toString().charAt(0) !== "/");
    Ember.assert("URL suffix (" + suffix + ") must not start with slash", !suffix || suffix.toString().charAt(0) !== "/");

    if (!Ember.isNone(this.namespace)) {
      url.push(this.namespace);
    }

    url.push(this.pluralize(root));
    if (suffix !== undefined) {
      url.push(suffix);
    }
    url = url.join("/") + '?format=json-pretty';
    return url;
  },
  ajax: function(url, type, hash) {
    var adapter = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = hash || {};
      hash.url = 'http://bridgetown-dev.squarespace.com/' + url;
      hash.type = type;
      hash.dataType = 'jsonp';
      hash.context = adapter;

      if (hash.data && type !== 'GET') {
        hash.contentType = 'application/json; charset=utf-8';
        hash.data = JSON.stringify(hash.data);
      }

      if (adapter.headers !== undefined) {
        var headers = adapter.headers;
        hash.beforeSend = function (xhr) {
          Ember.keys(headers).forEach(function(key) {
            xhr.setRequestHeader(key, headers[key]);
          });
        };
      }

      hash.success = function(json) {
        Ember.run(null, resolve, json.items);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        if (jqXHR) {
          jqXHR.then = null;
        }

        Ember.run(null, reject, jqXHR);
      };

      Ember.$.ajax(hash);
    });
  },
  serializer: DS.RESTSerializer.extend({
    normalize: function (type, hash, property) {
      // property will be "post" for the post and "comments" for the
      // comments (the name in the payload)

      // normalize the `_id`
      var json = { id: hash._id };
      delete hash._id;

      // normalize the underscored properties
      for (var prop in hash) {
        json[prop.camelize()] = hash[prop];
      }

      // delegate to any type-specific normalizations
      return this._super(type, json, property);
    }
  })
});

DS.SquarespaceAdapter.reopen({
  root: 'http://bridgetown-dev.squarespace.com'
});


module.exports = DS.SquarespaceAdapter;