import {inject, bindable, customElement} from 'aurelia-framework';
import $ from 'jquery';
import {datepicker} from 'jquery-ui';


@customElement('jquery-datepicker')
export class JqueryDatepicker {

  static inject() {
    return [Element];
  }

  constructor(element) {
    this.element = element;

    console.log(this.element);

    if (!this.id && this.name) {
      this.id = this.name;
    }

    if (!this.name && this.id) {
      this.name = this.id;
    }
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

