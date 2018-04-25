export default function(){

  const customDuration = 800;

  this.transition(
    this.toRoute(
      'index'
    ),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'priority',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute([
      'financial-life',
      'investment',
      'priority',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('financial-life'),
    this.toRoute([
      'about',
      'investment',
      'priority',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );
  this.transition(
    this.fromRoute('investment'),
    this.toRoute([
      'about',
      'financial-life',
      'priority',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );


  this.transition(
    this.fromRoute('news'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'priority',
      'contact',
      'news.trending',
      'news.archive'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('news'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'priority',
      'contact',
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );


  this.transition(
    this.fromRoute('priority'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'news',
      'contact',
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'news',
      'priority',
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute([
      'about.your-team',
      'about.our-story',
      'about.how-different',
      'financial-life.clarity',
      'investment.management',
      'news.post',
      'news.trending',
      'news.archive',
      'contact.form',
      'priority.video',
      'disclosure',
    ]),
    this.use('toUp', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.our-story'
    ]),
    this.toRoute([
      'about.how-different'
    ]),
    this.use('toUp', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.how-different'
    ]),
    this.toRoute([
      'about.our-story'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.how-different'
    ]),
    this.toRoute([
      'about.your-team'
    ]),
    this.use('toUp', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.your-team'
    ]),
    this.toRoute([
      'about.how-different'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.your-team'
    ]),
    this.toRoute([
      'about.member'
    ]),
    this.use('toUp', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.member'
    ]),
    this.toRoute([
      'about.your-team'
    ]),
    this.use('toDown', { duration: customDuration }),
  );
  this.transition(
    this.fromRoute([
      'news.trending'
    ]),
    this.toRoute([
      'news.archive'
    ]),
    this.use('toDown', { duration: customDuration }),
  );
  this.transition(
    this.fromRoute([
      'news.archive'
    ]),
    this.toRoute([
      'news.trending'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  // this.transition(
  //   this.fromRoute('home'),
  //   this.toRoute(['about.your-team','about.our-story','about.how-different']),
  //   this.use('toUp', { duration }),
  //   this.reverse('toDown')
  // );
}


