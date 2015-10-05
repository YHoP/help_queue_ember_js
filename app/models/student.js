import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  tickets: DS.hasMany('ticket', {async: true})
});
