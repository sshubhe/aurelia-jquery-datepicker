import $ from 'jquery';
import {datepicker} from 'jquery-ui-datepicker';

export class Calendar {
  constructor() {
    this.dateSelected = 'blank';
  }

  submitDateToServer() {
    console.log('SENDING TO SERVER:', this.dateSelected)
  }
}