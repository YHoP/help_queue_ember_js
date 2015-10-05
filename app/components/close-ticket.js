import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      var params = {
        isClosed: true,
        time_closed: Date.now(),
      };
      this.sendAction('closeTicket', ticket, params);
    }

  }
});
