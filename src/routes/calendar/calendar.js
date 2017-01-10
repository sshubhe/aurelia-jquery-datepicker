import $ from 'jquery';
import {datepicker} from 'jquery-ui-datepicker';

export class Calendar {
  constructor() {
    this.dateSelected = 'blank';
  }

  attached() {
    $('#datepicker').datepicker();
  }

  submitDateToServer() {
    console.log('SENDING TO SERVER:', this.dateSelected)
  }
}