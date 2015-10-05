import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.belongsTo('student', {async: true}),
  question: DS.attr(),
  time_added: DS.attr(),
  time_closed: DS.attr(),
  isClosed: DS.attr('boolean')
});
