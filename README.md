# Examples of jQuery datepicker and HTML5 datepicker with Aurelia

The Aurelia CLI app must be intalled to run these examples. You can install it with the command

    npm install aurelia-cli -g

After cloning the repo you can run the app using these commands

    npm install
	  au run --watch

There are 2 links to demonstrate datepickers.

The following lines in _aurelia/aurelia.json_ are what adds the jQuery 
components to our web application

    "dependencies": [
      ...
      "jquery",
      {
        "name": "jquery-ui-datepicker",
        "path": "../node_modules/jquery-ui/",
        "main": "ui/widgets/datepicker",
        "dep": ["jquery"],
        "exports": "$",
        "resources": [
            "themes/base/datepicker.css",
            "themes/base/theme.css"
        ]
      }
    ]

Look at the Model-View in in _src/routes/calendar/calendar.js_

jQuery and jQuery-ui get imported via the lines

    import $ from 'jquery';
    import {datepicker} from 'jquery-ui';

In our view _src/routes/calendar/calendar.html_, we have to include the CSS by 
using

    <link rel="stylesheet" type="text/css" href="node_modules/jquery-ui/themes/base/datepicker.css">
    <link rel="stylesheet" type="text/css" href="node_modules/jquery-ui/themes/base/theme.css">

The following line in our _src/routes/calendar/calendar.html_ fixes the problem of
the input field not being populated when the jQuery datepicker date is selected

    <require from="./datepicker"></require>

What this does, is bind the _onchange()_ event on jQuery's datepicker component
to fire an event off [thanks Jeremy Danyow](https://www.danyow.net/jquery-ui-datepicker-with-aurelia/)
to change the value, so Aurelia knows it changed.

Aurelia listens for _onchange()_ events, but, only from the user, not from the
DOM being manipulated (which is what jQuery does)

So, the _src/routes/calendar/datepicker.js_ service assigns a listener to jQuery's
_onchange()_ method, which will publish a change when the user selects a date

