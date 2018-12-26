import { Component, Prop, State } from '@stencil/core';
import { sayHello } from '../../helpers/utils';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @State() checked = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Profile: {this.name}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          {sayHello()}! My name is {this.formattedName()}. My name was passed in through a
          route param!
        </p>
        <ion-item>
          <ion-label>Setting ({this.checked.toString()})</ion-label>
          <ion-toggle
            checked={this.checked}
            onIonChange={ev => (this.checked = ev.detail.checked)}
          />
        </ion-item>
      </ion-content>
    ];
  }
}
