import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    showTicketForm() {
      this.set('addNewTicket', true);
    },

    saveTicket(student) {
      var params = {
        question: this.get('question'),
        isClosed: false,
        time_added: Date.now(),
        time_closed: null,
        student: student
      };
      this.set('addNewTicket', false),
      this.sendAction('saveTicket', params);
    }
  }
});
