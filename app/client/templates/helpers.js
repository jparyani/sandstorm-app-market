var helpers = {

  //USER HELPERS
  getUsername: function(_id) {

    var user = Meteor.users.findOne(_id);

    return user && user.username;

  },

  //ROUTER/SUB HELPERS

  routerSubsReady: function(name) {

    return name ? FlowRouter.subsReady(name) : FlowRouter.subsReady();

  },

  routeRoot: function(string) {

    return FlowRouter.reactiveCurrent().path.substr(0, string && string.length) === string ?
          'active' : '';

  },

  getPath: function(routeName, params, queryParams) {

    return FlowRouter.path(routeName, params, queryParams);

  },

  // UTILITY HELPERS
  equal: function(a, b) {

    return a === b;

  },

  prune: function(string, length) {

    return s.prune(string, length);

  },

  count: function(cursor) {

    return cursor.count();

  },

  countApps: function(genre) {

    return Genres.findIn(genre, {}, {}).count();

  },

  skipLimit: function(iterable, skip, limit) {

    if (typeof iterable.fetch === 'function') iterable = iterable.fetch();
    if (!Array.isArray(iterable)) return [];

    if (limit) return iterable.slice(skip, skip + limit);
    else return iterable.slice(skip);

  },

  uriEncode: function(string) {

    return encodeURIComponent(string);

  },

  dateFormat: function(date, format) {

    if (!(date instanceof Date)) return '#NAD';
    else return moment(date).format(format);

  },

  last: function(array) {

    return _.last(array);

  },

  // DEBUGGING HELPERS

  logThis: function() {

    console.log(this);

  },

  logParentData: function(depth) {

    console.log(Template.parentData(depth));

  }

};

_.forEach(helpers, function(val, key) {
  Template.registerHelper(key, val);
});