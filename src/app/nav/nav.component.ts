import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  customToggle: boolean = true;

  button = [
    { name: 'All' },
    { name: 'Javascript' },
    { name: 'News' },
    { name: 'Music' },
    { name: 'Sales' },
    { name: 'Movie' },
    { name: 'Comedies' },
    { name: 'Education' },
    { name: 'Human' },
    { name: 'Live' },
    { name: 'Entertainment' }
  ];

  menuItems = [
    { icon: 'home', name: 'Home' },
    { icon: 'explore', name: 'Explore' },
    { icon: 'subscriptions', name: 'Subscriptions' },
    { icon: 'video_library', name: 'Library' },
    { icon: 'history', name: 'History' },
    { icon: 'slideshow', name: 'Your Video' },
    { icon: 'watch_later', name: 'Watch Later' },
    { icon: 'thumb_up', name: 'Liked Videos' },
  ];

  subscriptions = [
    { icon: 'library_music', name: 'Music' },
    { icon: 'emoji_events', name: 'Sport' },
    { icon: 'sports_esports', name: 'Gaming' },
    { icon: 'confirmation_number', name: 'Films' }
  ];

  searchText: any;
  cardvalues = [
    {
      source: 'https://th.bing.com/th/id/OIP.R-ZB5sCyp7xgFVtI3pKXhAHaEK?w=320&h=180&c=7&r=0&o=5&pid=1.7',
      title: 'Angular Tutorial For Beginners',
      body: 'Best video to learn angular in short in 10days only'
    },

    {
      source: 'https://th.bing.com/th/id/OIP.1X00EVW9bpECscLWjJkcmQHaEc?w=300&h=180&c=7&r=0&o=5&pid=1.7',
      title: 'Top 10 best place to visit in India',
      body: 'checlout my channel on the best places to visit in india'
    },
    {
      source: 'https://th.bing.com/th/id/OIP.RHG4c7gGM5EdMyhqQbL_xwHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7',
      title: 'Indian players who have raked in IPL',
      body: 'read all about the best indian players who have raned big in IPL Sports'
    },

    {
      source: 'https://th.bing.com/th/id/OIP.s9VZ8_TwaM08kPv7bqUjXwHaLH?w=182&h=273&c=7&r=0&o=5&pid=1.7',
      title: 'Captain Marvel 2019 Full Movie English(HD)',
      body: 'Watch the full movie in youtube with subtitles and english language'
    },

    {
      source: 'https://th.bing.com/th/id/OIP.slLfMdM96jGIddjjkCr0pQHaK-?w=182&h=270&c=7&r=0&o=5&pid=1.7',
      title: 'A young boy life shattered',
      body: 'A young boy life shattered when a shooter enters his elementary school'
    },
    {
      source: 'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_164%2Cw_312%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Fstatic%2F0e%2F0e1d8c38-3fbf-4c3e-bff1-8c48b1662e4c.png',
      title: 'Learn grammer english for writing',
      body: 'Learn for better vocabulary and talking fluently in english to be the best to beat the rest'
    },
    {
      source: 'https://th.bing.com/th/id/OIP.R-ZB5sCyp7xgFVtI3pKXhAHaEK?w=320&h=180&c=7&r=0&o=5&pid=1.7',
      title: 'Angular Tutorial For Beginners',
      body: 'Best video to learn angular in short in 10days only'
    },
    {
      source: 'https://th.bing.com/th/id/OIP.1X00EVW9bpECscLWjJkcmQHaEc?w=300&h=180&c=7&r=0&o=5&pid=1.7',
      title: 'Top 10 best place to visit in India',
      body: 'checlout my channel on the best places to visit in india'
    },
  ];

  check(mobile: any, custom: boolean) {
    let _marginLeft = '';
    if (mobile) {
      _marginLeft = '0px';
    } else {
      _marginLeft = custom ? '200px' : '73px';
    }
    return _marginLeft;
  }

}
