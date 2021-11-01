import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { auth } from '../firebase';
import SignInScreen from './SignInScreen';

function SignUpScreen() {

    const [signIn, setSignIn] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value,
            ).then((authUser) => {
                console.log(authUser)
            }).catch((err) => {alert(err)})
    }

    return (
        <>

        {signIn ? (
                    <SignInScreen/>
                ) : (

        <SignUpScreenMain>
             <form>
                <h1>Register Now</h1>
                {/* <input ref={usernameRef} type="text" placeholder="Username" /> */}
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/> 
                <button onClick={register} type="submit">Create Account</button>
                <h4> <span className="gray">Already Have An Account? </span> 
                <a onClick={() => setSignIn(true)} className="link">Login Now</a> </h4>
            </form>
                
        </SignUpScreenMain>
        )}
        </>
    )
}

export default SignUpScreen

const SignUpScreenMain = styled.div`
    max-width: 300px;
    padding: 70px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0, 0, 0, 0.85);

    >form{
        display: grid;
        flex-direction: column;
    }
    >form >h1{
        text-align: left;
        margin-bottom: 20px;
    }
    >form >input{
        outline: none;
        border: none;
        height: 40px;
        max-width: 600px;
        padding: 5px 15px;
        margin-bottom: 14px;
    }

    >form >button{
        padding: 16px 20px;
        font-size: 1rem;
        color: #fff;
        border-radius: 5px;
        background-color: #e50914;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        margin-top: 20px;
    }

    >form >h4{
        text-align: left;
        margin-top: 30px;
    }

    >form >h4 >span  {
        color: gray;
    }
    >form >h4 >a:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

