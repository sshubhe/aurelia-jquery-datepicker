export class App {

  constructor() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  configureRouter(config, router) {
    config.title = 'Calendar Examples';

    // create default route object
    var nullRoute = {
      route: '',
      redirect: 'home'
    };


    var homeRoute = {
      route: 'home',
      moduleId: './routes/home/home',
      name: 'home',
      nav: true,
      settings: {
        roles: [],
      },
      title: 'Home'
    };

    // use air-datepicker
    var calendarRoute = {
      route: 'calendar',
      moduleId: './routes/calendar/calendar',
      name: 'calendar',
      nav: true,
      settings: {
        roles: [],
      },
      title: 'Air Date Selector',
    };


    // In order for Aurelia to navigate to the different routes, you add them here
    config.map([
      nullRoute,
      homeRoute,
      calendarRoute
    ]);

    // send all unknown routes to home page
    config.mapUnknownRoutes('./routes/home/home');

    /*
     assign the router to the app
     */
    this.router = router;
  }
}
