import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      students: this.store.findAll('student'),
      tickets: this.store.findAll('ticket')
    });
  },

  actions: {
    saveStudent(params) {
      var newStudent = this.store.createRecord('student', params);
      newStudent.save();
      this.transitionTo('index');
    }

  }
});
