import Ember from 'ember';

export function formatTime(params) {
  var date = params[0];
  return moment(date).format('LLL');
}

export default Ember.Helper.helper(formatTime);
