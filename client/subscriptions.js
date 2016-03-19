Session.setDefault("fooId", false);

Meteor.subscribe("horses", Session.get('fooId'));
