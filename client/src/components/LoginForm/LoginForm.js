import React from 'react';
import {authActionLogin, clearAuth, clearErrorSignUpAndLogin} from "../../actions/actionCreator";
import styles from './LoginForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import {connect} from "react-redux";

const LoginForm = props => {
        const {handleSubmit, handleError, submitting, loginRequest, authClear} = props;
        const {error} = props.auth;
        const formInputClasses = {
            container: styles.inputContainer,
            input: styles.input,
            warning: styles.fieldWarning,
            notValid: styles.notValid,
            valid: styles.valid,
        };
        handleError(error);
        return (
                <form className={styles.loginForm} onSubmit={(loginRequest)=>handleSubmit(loginRequest)}>
                    <Field
                        name='email'
                        classes={formInputClasses}
                        component={FormInput}
                        type='text'
                        label='Email Address'
                    />
                    <Field
                        name='password'
                        classes={formInputClasses}
                        component={FormInput}
                        type='password'
                        label='password'
                    />
                    <button type='submit'
                            disabled={submitting}
                            className={styles.submitContainer}>
                        <span className={styles.inscription}>LOGIN</span>
                    </button>
                </form>
        );
};

const mapStateToProps = (state) => {
    const {auth} = state;
    return {auth};
};

const mapDispatchToProps = (dispatch) => (
    {
        loginRequest: (data) => dispatch(authActionLogin(data)),
        authClear: () => dispatch(clearAuth())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: customValidator(Schemas.LoginSchem)
})(LoginForm));
