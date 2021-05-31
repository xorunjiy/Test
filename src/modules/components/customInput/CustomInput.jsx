import React from 'react';
import { Wrapper } from './styledComponents.js';
import PropTypes from 'prop-types';
import theme from '../../themes/colors.js'//принимать пропсой

const CustomInput = props => {
    const {
        type,
        name,
        label,
        width,
        value,
        height,
        display,
        checked,
        required,
        fontSize,
        labelColor,
        handleChange,
        inputBackground,
    } = props;

    return(
        <Wrapper display={display}>
            {label && 
            <Wrapper.label fontSize={fontSize}
                                children={label}
                                labelColor={labelColor}
            />}
            <Wrapper.input
                type={type}
                name={name}
                value={value}
                width={width}
                height={height}
                checked={checked}
                fontSize={fontSize}
                required={required}
                onChange={handleChange}
                inputBackground={inputBackground}
            />
        </Wrapper>
    )
}

CustomInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number,
    value: PropTypes.string,
    height: PropTypes.number,
    checked: PropTypes.bool,
    display: PropTypes.string,
    required: PropTypes.bool,
    fontSize: PropTypes.number,
    labelColor: PropTypes.string,
    inputTitle: PropTypes.string,
    handleChange: PropTypes.func,
    inputBackground: PropTypes.string,

}

CustomInput.defaultProps = {
    type: 'text',
    width: 40,
    height: 25,
    display: 'block',
    fontSize: 18,
    required: false,
    value:'',
    inputBackground: theme.infoBackground,
}

export default React.memo(CustomInput);