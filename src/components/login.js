import React, {useState, useContext} from 'react';
import Auth from '../auth/auth';
import {UserDataContext} from '../containers/logincontext';

const Login = (props) => {
    const [, setUser] = useContext(UserDataContext)
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        Auth.signin(email, password).then(payload => {
            setUser(payload.user);
            props.history.push('/');
        }).catch(error => {
            alert(error);
        });
    };

    const signupUser = (e) => {
        e.preventDefault();
        Auth.signup(email, name, password).then(payload => {
            setUser(payload.user);
            props.history.push('/');
        }).catch(error => {
            alert(error);
        });
    };

    const resetForm = () => {
        email = '';
        password = '';
    };


    return (<form className='login'
        onSubmit={
            props.signup ? signupUser : loginUser
    }>
        <h1> {
            props.signup ? 'Signup' : 'Login'
        }</h1>
        {
        props.signup && <div className="form-group">
            <label>Name</label>
            <input required className="form-field" name="name" id="name"
                value={name}
                onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                }/>
        </div>
    }
        <div className="form-group">
            <label>Email</label>
            <input required className="form-field" name="email" id="email"
                value={email}
                onChange={
                    (e) => {
                        setEmail(e.target.value)
                    }
                }/>
        </div>
    <div className="form-group">
        <label>Password</label>
        <input required type="password" className="form-field" name="password" id="password"
            value={password}
            onChange={
                (e) => {
                    setPassword(e.target.value)
                }
            }/>
    </div>
<div className="form-group buttons">
    <button className="btn btn-success"> {
        props.signup ? 'REGISTRATI' : 'ACCEDI'
    }</button>
    <button type='reset' className="btn btn-success"
        onClick={resetForm}>RESET</button>
</div></form>)
};

export default Login;
