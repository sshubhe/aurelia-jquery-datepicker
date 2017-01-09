import {bindable, inject} from 'aurelia-framework';
import $ from 'jquery';
import {tabs} from 'jquery-ui';

@inject(Element)
export class TabCustomElement {
  @bindable tabs = null;

  constructor(el) {
    this.id = el.id;
  }

  attached() {
    $(`#${this.id}`).tabs();
  }
}
