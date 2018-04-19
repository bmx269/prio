export default function(){
  // this.transition(
  //   this.toRoute(['*']),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );

  const duration = 800;

  this.transition(
    this.toRoute(
      'index',
    ),
    this.use('toDown', { duration }),
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute([
      'financial-life',
      'investment',
      'priority',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration }),
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
    this.use('toUp', { duration }),
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
    this.use('toUp', { duration }),
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
    this.use('toUp', { duration }),
    this.reverse('toDown')
  );


  this.transition(
    this.fromRoute('news'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'priority',
      'contact'
    ]),
    this.use('toUp', { duration }),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('priority'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'news',
      'contact'
    ]),
    this.use('toUp', { duration }),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute([
      'about.your-team',
      'about.our-story',
      'about.how-different',
      'about.member',
      'financial-life.clarity',
      'investment.management',
      'priority.video',
      'news.trending',
      'news.archive',
      'news.post'
    ]),
    this.use('toUp', { duration }),
  );

  // this.transition(
  //   this.fromRoute('home'),
  //   this.toRoute(['about.your-team','about.our-story','about.how-different']),
  //   this.use('toUp', { duration }),
  //   this.reverse('toDown')
  // );
}


