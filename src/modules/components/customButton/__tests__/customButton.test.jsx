import React from 'react';
import CustomButton from '../CustomButton';

const props = {
    type: 'button',
    text: 'add task',
    width: 40,
    height: 40,
    fontSize: 24,
    handleEvent: () => {},
    buttonBackground: '#fff',
    buttonBackgroundHover:'#fff',
};

describe('CustomButton snapshot', () => {
    it('should correctly render', () => {

        const component = renderer(<CustomButton {...props}/>);

        expect(component).toMatchSnapshot();
    });
});