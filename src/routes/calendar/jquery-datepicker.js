import {inject, bindable, customElement} from 'aurelia-framework';
import 'jquery';
import {datepicker} from 'jquery-ui';


@customElement('jquery-datepicker')
export class JqueryDatepicker {

  @bindable id = '';
  @bindable name = '';
  @bindable options = {};

  static inject() {
    return [Element];
  }

  constructor(element) {
    this.element = element;
    console.log('ELEMENT', this.element);
  };

  attached() {
    console.log(`id is ${this.id}`);

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

