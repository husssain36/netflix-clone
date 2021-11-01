import React, { useState } from 'react'
import styled from 'styled-components'
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (

        <LoginMain>
            <LoginScreenBackground>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={() => setSignIn(true)}>Sign In</button>
                <LoginScreenGradient/>
            </LoginScreenBackground>

            <LoginScreenBody>
                {signIn ? (
                    <SignInScreen/>
                ) : (
                <>
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <LoginScreenInput>
                        <form>
                            <input type="email" placeholder="Email address"/>
                            <button onClick={() => setSignIn(true)}>Get Started</button>
                        </form>
                    </LoginScreenInput>
                </>
                )}
            </LoginScreenBody>
        </LoginMain> 
    )
}

export default LoginScreen

const LoginMain = styled.div `
    position: relative;
    height: 100%;
    background: url('https://assets.nflxext.com/ffe/siteui/vlv3/708b4535-3fc3-4d98-a1ae-ebdb80873bee/5bee6fff-edb2-46dc-a704-dc4ced25d9b7/IN-en-20211018-popsignuptwoweeks-perspective_alpha_website_large.jpg') center no-repeat;
    background-size: cover;

`;
const LoginScreenBackground = styled.div `
    >img {
        position:fixed;
        left: 0;
        width: 150px;
        object-fit: contain;
        padding-left: 20px;
       
    }

    >button {
        position:fixed;
        right: 20px;
        top: 20px;
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background-color: #e50914;
        border: none;
        outline: none;
        cursor: pointer;
        font-weight: 600;
    }
`;

const LoginScreenGradient = styled.div `
    display: flex;
    width:  100%;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
    ) 
`;

const LoginScreenBody = styled.div`
        justify-items: center;
        justify-content: center !important;
        align-items: center;
        position: absolute;
        top: 30%;
        text-align: center;
        z-index: 1;
        color: white;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;

        >h1 {
            font-size: 3.125rem;
            margin-bottom: 20px;
        }

        >h2{
            font-size: 2rem;
            margin-bottom: 30px;
            font-weight: 400;
        }

        >h3{
            font-size: 1.3rem;
            font-weight: 400;

        }
`;

const LoginScreenInput = styled.div`
        padding: 10px;
        > form >input {
            padding: 10px;
            outline: none;
            height: 30px;
            width: 50%;
            border: none;
            max-width: 600px;
        }
        >form >button{
            padding: 17px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #e50914;
            border: none;
            outline: none;
            cursor: pointer;
            font-weight: 600;
        }
`;