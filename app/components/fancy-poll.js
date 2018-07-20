import Component from '@ember/component';
import { later } from '@ember/runloop';
import { inject } from '@ember/service';

export default Component.extend({
  router: inject(),
  poll: null,
  answerPoll(answer) {
    this.get('poll').toggleProperty('isAnswered')
    later(() => {
      this.get('router').transitionTo('answers.view', answer)
    }, 1000)
  }
});
