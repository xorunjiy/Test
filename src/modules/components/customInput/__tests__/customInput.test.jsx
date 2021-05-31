import React from 'react';
import CustomInput from '../CustomInput.jsx';

const props = {
    type: 'text',
    width: 40,
    height: 25,
}

describe('CustomInput snapshot', () => {
    it('should correctly render', () => {

        const component = renderer(<CustomInput {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
