import {inject, customElement} from 'aurelia-framework';
import $ from 'jquery';
import {datepicker} from 'jquery-ui';


@customElement('jqueryDatepicker')
export class Calendar {

  static inject() {
    return [Element];
  }

  constructor(element) {
    this.element = element;
    console.log('ELEMENT', element);
  };

  attached() {
    $('#myID').datepicker(this.options)
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
    $('#myID').datepicker('destroy').off('change');
  }

}

