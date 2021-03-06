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
      'connections',
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
      'connections',
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
      'connections',
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
      'connections',
      'contact'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );


  this.transition(
    this.fromRoute('connections'),
    this.toRoute([
      'about',
      'financial-life',
      'investment',
      'priority',
      'contact'
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
      'connections',
      'contact'
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
      'connections',
      'priority'
    ]),
    this.use('toUp', { duration: customDuration }),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute([
      'about.our-story',
      'about.your-priority',
      'about.how-different',
      'about.your-team',
      'about.member',
      'about.jobs',
      'financial-life.clarity',
      'investment.management',
      'connections.blog',
      'connections.blogpost',
      'connections.post',
      'connections.in-the-news',
      'connections.archive',
      'connections.investment-updates',
      'connections.prio-cares',
      'contact.form',
      'priority.video',
      'disclosure'
    ]),
    this.use('toUp'),
  );

  this.transition(
    this.fromRoute([
      'about.your-priority'
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
      'about.your-priority'
    ]),
    this.use('toDown', { duration: customDuration }),
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
      'about.member'
    ]),
    this.toRoute([
      'about.your-team'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'about.jobs'
    ]),
    this.toRoute([
      'about.your-team'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'connections.in-the-news'
    ]),
    this.toRoute([
      'connections.blog'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'connections.blogpost'
    ]),
    this.toRoute([
      'connections.blog'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'connections.archive'
    ]),
    this.toRoute([
      'connections.in-the-news'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'connections.investment-updates'
    ]),
    this.toRoute([
      'connections.in-the-news'
    ]),
    this.use('toDown', { duration: customDuration }),
  );

  this.transition(
    this.fromRoute([
      'connections.prio-cares'
    ]),
    this.toRoute([
      'connections.investment-updates'
    ]),
    this.use('toDown', { duration: customDuration }),
  );
}


