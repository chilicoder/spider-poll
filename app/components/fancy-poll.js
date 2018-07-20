import Component from '@ember/component';

export default Component.extend({
  poll:null,
  answerPoll(poll, answer){
    console.log(answer);
    this.get('poll').toggleProperty('isAnswered')
  }
});
