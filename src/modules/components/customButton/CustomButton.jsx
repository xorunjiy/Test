import React from 'react';
import { Button } from './styledComponents.js';
import PropTypes from 'prop-types';
import theme from '../../themes/colors.js';

const CustomButton = props => {
    const {
        type,
        text,
        width,
        height,
        fontSize,
        handleEvent,
        buttonBackground,
        buttonBackgroundHover,
    } = props;

    return(
        <Button width={width}
                type={type}
                height={height}
                fontSize={fontSize}
                onClick={handleEvent}
                buttonBackground={buttonBackground}
                buttonBackgroundHover={buttonBackgroundHover}
        >
            {text}
        </Button>
    )
}

CustomButton.propTypes = {
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    buttonBackground: PropTypes.string,
    buttonBackgroundHover: PropTypes.string,
}

CustomButton.defaultProps = {
    text: 'button',
    type: 'button',
    width: 100,
    height: 25,
    fontSize: 18,
    buttonBackground: theme.buttonBackground,
    buttonBackgroundHover: theme.buttonBackgroundHover,
    buttonBackgroundActive: theme.buttonBackgroundActive
}

export default React.memo(CustomButton);