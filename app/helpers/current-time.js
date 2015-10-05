import Ember from 'ember';

export function currentTime() {
  return moment().format('LLL');
}

export default Ember.Helper.helper(currentTime);
