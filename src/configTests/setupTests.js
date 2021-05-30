import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.styled = styled;
global.shallow = shallow;
global.renderer = styledComponent => renderer.create(styledComponent).toJSON();

