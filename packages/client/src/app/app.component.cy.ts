import { AppComponent } from './app.component';
import { mount } from 'cypress/angular';

describe('AppComponent', () => {
  it('mount', () => {
    mount(AppComponent)
  });
});
