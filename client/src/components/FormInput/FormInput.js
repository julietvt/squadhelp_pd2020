import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {
    const {label, input, type, classes, meta: {touched, error, visited}} = props;
    const inputClassName = classNames(classes.input,
        {
            [classes.notValid]: touched && error,
            [classes.valid]: visited && !error,
        });
    return (
        <div className={classes.container}>
            <input {...input} placeholder={label} type={type}
            className={inputClassName}/>
        {classes.warning && (touched &&
            (error && <span className={classes.warning}>(error)</span>))}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    type: PropTypes.string,
    container: PropTypes.string,
    valid: PropTypes.string,
    notValid: PropTypes.string,
    warning: PropTypes.string
};

export default FormInput;