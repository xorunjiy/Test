import React from 'react';
import PropTypes from 'prop-types';
import { 
    Wrapper,
    PagesWrapper
 } from './styledCompomemts';

const CustomPaginator = props => {
    const {
        handlePage,
        currentPage,
        pageQuantity,
    } = props;

    const pagesList = Array.from(Array(pageQuantity+1).keys()).slice(1);

    return(
        <Wrapper>
            <PagesWrapper>
                {pagesList.map(page => (
                    <PagesWrapper.pageNumber
                        id={page}
                        key={page}
                        onClick={handlePage}
                        children={page}
                        currentPage={+currentPage === page ? true: false}
                    />
                ))    
                }
            </PagesWrapper>
        </Wrapper>
    )
}

CustomPaginator.propTypes = {
    handlePage: PropTypes.func,
    pageQuantity: PropTypes.number,
}

CustomPaginator.defaultProps = {
    pageQuantity: 0,
}

export default React.memo(CustomPaginator);