import { renderComponent, expect } from '../testHelper';
import App from '../../../src/js/containers/App';
import React from 'react';
describe('App', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App, {children: <div className="testdiv">testa</div>});
  });

  it('shows a div for App', () => {
    expect(component.find('.testdiv')).to.exist;
  });

  // it('shows a friend list', () => {
  //   expect(component.find('.friendList')).to.exist;
  // });
});
