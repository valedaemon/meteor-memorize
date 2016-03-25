if (Meteor.isServer) {
  Cacher = Npm.require('node-cache');

  var settings;

  if (Meteor.settings && Meteor.settings.memorize && typeof(Meteor.settings.memorize) == "object" && typeof(Meteor.settings.memorize.delay != "undefined")) {
    settings = Meteor.settings.memorize;
  } else {
    Meteor.settings.memorize = {
      stdTTL: 0,
      checkPeriod: 1800,
      errorOnMissing: false,
      useClones: true
    };
  }

  Memorize = new Cacher(settings);
}