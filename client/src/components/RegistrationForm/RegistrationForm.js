import React from 'react';
import Error from '../Error/Error';
import {connect} from "react-redux";
import {authActionRegister, clearAuth} from '../../actions/actionCreator';
import {Redirect} from 'react-router-dom';
import styles from './RegistrationForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import FormError from '../FormError'


const RegistrationForm = props => {
    const {handleSubmit, submitting} = props;
    const formInputStyles = {
        inputStyles: styles.input,
        invalidStyles: styles.notValid,
        validStyles: styles.valid,
    };
    const renderFiled = (field) => (
        <label className={styles.inputContainer}>
            <FormInput {...field} {...formInputStyles}/>
            <FormError meta={field.meta} className={styles.fieldWarning}/>
        </label>
    );
        return (
            <form className={styles.signUpFormContainer} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <Field
                            name='firstName'
                            component={renderFiled}
                            type='text'
                            label='First name'
                        />
                        <Field
                            name='lastName'
                            component={renderFiled}
                            type='text'
                            label='Last name'
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name='displayName'
                            component={renderFiled}
                            type='text'
                            label='Display Name'
                        />
                        <Field
                            name='email'
                            component={renderFiled}
                            type='text'
                            label='Email Address'
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name='password'
                            component={renderFiled}
                            type='password'
                            label='Password'
                        />
                        <Field
                            name='confirmPassword'
                            component={renderFiled}
                            type='password'
                            label='Password confirmation'
                        />
                    </div>
                    <div className={styles.choseRoleContainer}>
                        <Field name='role' type='radio' value={CONSTANTS.CUSTOMER} strRole='Join As a Buyer'
                               infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                               component={RoleInput} id={CONSTANTS.CUSTOMER}/>
                        <Field name='role' type='radio' value={CONSTANTS.CREATOR} strRole='Join As a Creative'
                               infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                               component={RoleInput} id={CONSTANTS.CREATOR}/>
                    </div>
                    <div className={styles.termsOfService}>
                        <Field
                            name='agreeOfTerms'
                            classes={{
                                container: styles.termsOfService,
                                warning: styles.fieldWarning
                            }}
                            id='termsOfService'
                            component={AgreeTermOfServiceInput}
                            type='checkbox'
                        />

                    </div>
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span className={styles.inscription}>Create Account</span>
                    </button>
                </form>
        );
    }


export default reduxForm({
    form: 'register',
    initialValues: {
        role: CONSTANTS.CUSTOMER,
    },
    validate: customValidator(Schems.RegistrationSchem),
})(RegistrationForm);