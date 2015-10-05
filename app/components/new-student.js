import Ember from 'ember';

export default Ember.Component.extend({
  addNewStudent: false,
  actions: {
    showStudentForm() {
      this.set('addNewStudent', true);
    },

    saveStudent() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      };
      this.set('addNewStudent', false);
      this.sendAction('saveStudent', params);
    }
  }
});
