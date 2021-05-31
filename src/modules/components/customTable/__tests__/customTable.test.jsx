import React from 'react';
import CustomTable from '../CustomTable.jsx';

const props = {
    rows: [
        {
            email: "zaz11@gmail.com",
            id: 25354,
            status: 0,
            text: "ZZZZZZZ1",
            username: "Zppppa"
        }
    ],
    columnTitles: [
        {
        id: 2,
        name: "username",
        text: "User name"
        }
    ],
    setTaskStatusFormat: () => void 0
}

describe('CustomTable snapshot', () => {
    it('should correctly render', () => {

        const component = renderer(<CustomTable {...props}/>);

        expect(component).toMatchSnapshot();
    });
});