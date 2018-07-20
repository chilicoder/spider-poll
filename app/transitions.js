export default function(){

  this.transition(
    this.fromRoute('poll'),
    this.use('toLeft',{ duration: 1000, easing: 'easeInOut' })
  );

  this.transition(
    this.toRoute('poll'),
    // this.toRoute('answers.view'),
    this.use('toRight',{ duration: 1000, easing: 'easeInOut' })
  );
}
