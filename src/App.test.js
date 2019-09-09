import React from 'react';

//Utilising MemoryRoouter from React Router
import { MemoryRouter } from 'react-router'

//Importing components referred to in tests
import App from './App';
import Form1 from './form1';
import Form2 from './form2';
import Header from './header';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });// Make Enzyme functions available
   
  //Unit Test #1

  test('render component Form1', () => {
    let component = mount( <MemoryRouter initialEntries = {['/']} >
        <Form1 />
      </MemoryRouter>
);
expect(component.find(Form1)).toHaveLength(1);
});

  //Unit Test #2

  test('render component Form2', () => {
    let component = mount( <MemoryRouter initialEntries = {['/form2']} >
        <Form2 />
      </MemoryRouter>
);
expect(component.find(Form2)).toHaveLength(1);
});


//Integration Test #1
test('render component Header in component Form1', () => {
  let component = mount( <MemoryRouter initialEntries = {['/']} >
      <Form1 />
    </MemoryRouter>
);
expect(component.find(Header)).toHaveLength(1);
});

//Integration Test #2
test('render component Header in component Form2', () => {
  let component = mount( <MemoryRouter initialEntries = {['/form2']} >
      <Form2 />
    </MemoryRouter>
);
expect(component.find(Header)).toHaveLength(1);
});

//Integration Test #3

test('render component Header component all the way from App component', () => {
  let component = mount( <MemoryRouter initialEntries = {['/']} >
      <App />
    </MemoryRouter>
);
expect(component.find(Header)).toHaveLength(1);
});


