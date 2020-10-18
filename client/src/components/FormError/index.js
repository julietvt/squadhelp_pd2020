import React from 'react';
import PropTypes from 'prop-types';

const FormError = props => {
    const {meta: {touched, error}, className} = props;
    return(
        <>
            {
                touched && error && <div className={className}>{error}</div>
            }
            </>
    );
};
export default FormError;