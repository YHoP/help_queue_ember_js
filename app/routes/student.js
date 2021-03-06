import Ember from 'ember';

export default Ember.Route.extend({
  /*
  fullName: Ember.computed('firstName', 'lastName', function(){
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  */

  model(params){
    return this.store.findRecord('student', params.student_id);
  },

  actions: {
    saveTicket(params){
      var newTicket = this.store.createRecord('ticket', params);
      var student = params.student;
      newTicket.save().then(function(){
        student.get('tickets').addObject(newTicket);
        student.save();
        this.transitionTo('ticket', params.ticket);
      });
    },

    closeTicket(ticket, params) {
      // debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          ticket.set(key,params[key]);
        }
      });
      ticket.save();
    }

  }
});
