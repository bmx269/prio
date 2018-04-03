export default function(){
  // this.transition(
  //   this.toRoute(['*']),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );

  const duration = 150;

  this.transition(
    this.fromRoute([
      'about.index',
      'financial-life.index',
      'investment.index',
      'priority.index'
    ]),
    this.use('toUp', { duration }),
    this.reverse('toDown')
  );

  // this.transition(
  //   this.fromRoute('about.how-different'),
  //   this.use('toUp', { duration }),
  //   this.reverse('toDown')
  // );
  // this.transition(
  //   this.fromRoute('about.our-story'),
  //   this.use('toUp', { duration }),
  //   this.reverse('toDown')
  // );
  this.transition(
    this.toRoute([
      'about.your-team',
      'about.our-story',
      'about.how-different',
      'financial-life.management',
      'financial-life.management.clarity',
      'financial-life.management.control',
      'financial-life.management.confidence'
    ]),
    this.use('toUp', { duration }),
    this.reverse('toDown')
  );
  // this.transition(
  //   this.fromRoute('home'),
  //   this.toRoute(['about.your-team','about.our-story','about.how-different']),
  //   this.use('toUp', { duration }),
  //   this.reverse('toDown')
  // );
}


