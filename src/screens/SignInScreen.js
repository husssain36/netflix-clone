import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { auth } from '../firebase';
import SignUpScreen from './SignUpScreen';

function SignInScreen() {

    const [signUp, setSignUp] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
            ).then((authUser) => {
                console.log(authUser)
            }).catch((err) => {alert(err)})
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {alert(err)})
    }

    return (

        
        <>
        {signUp ? (
            <SignUpScreen/>
        ) : (
        <SignInScreenMain>
        
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/> 
                <button onClick={signIn} type="submit">Sign In</button>
                <h4> <span className="gray">New to Netflix? </span> 
                <a onClick={() => setSignUp(true)} className="link">Sign Up Now</a> </h4>
            </form>
            
        </SignInScreenMain>
        )}
        </>
        
    )
}

export default SignInScreen
const SignInScreenMain = styled.div `
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