import React from 'react';
import CustomPaginator from '../CustomPaginator.jsx';

const props = {
    currentPage: '1',
    pageQuantity: 2,
}

describe('CustomPaginator snapshot', () => {
    it('should correctly render', () => {

        const component = renderer(<CustomPaginator {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
