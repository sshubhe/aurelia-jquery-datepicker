import {customElement} from 'aurelia-framework';

@customElement('secret-message')
export class SecretMessage {
  constructor() {
    this.secretMessage = 'Be sure to drink your Ovaltine!';
  }
}