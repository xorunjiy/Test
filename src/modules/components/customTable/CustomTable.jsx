import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes/colors.js';
import {
    Row,
    Rows,
    Table,
    TableHeader,
} from './styledComponents.js'
import PropTypes from "prop-types";

const CustomTable = props => {
    const {
        rows,
        isLogged,
        sortHandle,
        onOpenModal,
        columnTitles,
        setTaskStatusFormat
    } = props;

    return(
        <ThemeProvider theme={theme}>
            <Table>
                <Table.TableHeader>
                    {columnTitles.map(title => (
                        <TableHeader.columnTitle 
                            key={title.id}  
                            name={title.name}  
                            children={title.text}
                            onClick={sortHandle}
                            id={title.id}
                        />
                    ))}
                </Table.TableHeader>
                <Rows>
                {rows.map(rowInfo => (
                    <Table.Row 
                        id={rowInfo.id} 
                        key={rowInfo.id} 
                        isLogged={isLogged} 
                        onClick={onOpenModal}
                    >
                        <Row.rowInfo children={rowInfo.username}/>
                        <Row.rowInfo children={rowInfo.email}/>
                        <Row.rowInfo children={rowInfo.text}/>
                        <Row.rowInfo children={setTaskStatusFormat(rowInfo.status)}/>
                    </Table.Row> 
                ))}
                </Rows>
            </Table>
        </ThemeProvider>
    );
}

CustomTable.propTypes = {
    rows: PropTypes.array,
    isLogged: PropTypes.bool,
    sortHandle: PropTypes.func,
    onOpenModal: PropTypes.func,
    columnTitles: PropTypes.array,
    setTaskStatusFormat: PropTypes.func,
}

export default React.memo(CustomTable);