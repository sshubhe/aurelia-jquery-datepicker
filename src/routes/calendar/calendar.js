import {inject, customElement} from 'aurelia-framework';
import $ from 'jquery';
import {datepicker} from 'jquery-ui';


@customElement('jquery-datepicker')
export class Calendar {

  static inject() {
    return [Element];
  }

  constructor(element) {
    this.element = element;

    this.id = 'myID';

    console.log(this.element);
  };

  attached() {
    $(`#${this.id}`).datepicker()
      .on('change', e => {
        let changeEvent = new CustomEvent('input', {
          detail: {
            value: e.val
          },
          bubbles: true
        });

        this.element.dispatchEvent(changeEvent);
      });
  }

  detached() {
    $(`#${this.id}`).datepicker('destroy').off('change');
  }

}

