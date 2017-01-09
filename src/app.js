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

    // use jquery-datepicker
    var calendarRoute = {
      route: 'calendar',
      moduleId: './routes/calendar/calendar',
      name: 'calendar',
      nav: true,
      settings: {
        roles: [],
      },
      title: 'Date Selector',
    };

    // use custom element
    var customElementRoute = {
      route: 'custom-element',
      moduleId: './routes/custom-element/hello-world',
      name: 'hello-world',
      nav: true,
      settings: {
        roles: [],
      },
      title: 'Custom Elements',
    };

    // use custom element
    var secretMessageRoute = {
      route: 'secret-message',
      moduleId: './routes/secret-message/secret-message-index',
      name: 'secret-message',
      nav: true,
      settings: {
        roles: [],
      },
      title: 'Secret-Message',
    };

    // In order for Aurelia to navigate to the different routes, you add them here
    config.map([
      nullRoute,
      homeRoute,
      calendarRoute,
      customElementRoute,
      secretMessageRoute
    ]);

    // send all unknown routes to home page
    config.mapUnknownRoutes('./routes/home/home');

    /*
     assign the router to the app
     */
    this.router = router;
  }
}
