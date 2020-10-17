import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {authActionLogin, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import LinkLogo from "../../components/LinkLogo";
import Error from "../../components/Error/Error";
import handleSubmit from "redux-form/lib/handleSubmit";
import { clearAuth } from '../../actions/actionCreator';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null}
    }
    changeRoute = () => {
        this.props.history.replace('/');
    };
    handleError = (error) => {
        this.setState({error: error});
    };

    render() {
        const {error} = this.state;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.loginContainer}>
                    <div className={styles.headerSignUpPage}>
                        <LinkLogo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt='logo' />
                        <div className={styles.linkLoginContainer}>
                            <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                        </div>
                    </div>
                    <div className={styles.loginFormContainer}>
                        {error && <Error data={error.data} status={error.status} clearError={this.props.clearError}/>}
                        <h2>LOGIN TO YOUR ACCOUNT</h2>
                        <LoginForm handleError={this.handleError}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);
