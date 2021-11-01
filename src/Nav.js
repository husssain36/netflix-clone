
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNavbar = () => {
        if(window.scrollY > 200) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', transitionNavbar)
       return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])

    return (
        <NavMain className={`${show && "nav__black"} `}>
            <NavContents >
                <NavLogo 
                onClick={() => history.push("/")}
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="" />

                <NavAvatar 
                 onClick={() => history.push("/profile")}
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
             </NavContents>
        </NavMain>
    )
}

export default Nav

const NavMain = styled.div`

    position: fixed;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 30px;
    z-index: 1;
    transition-timing-function:ease-in;
    transition: all 0.5s;
    
`;

const NavContents = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavLogo = styled.img`
    position: fixed;
    left: 0;
    object-fit: contain;
    cursor: pointer;
    padding-left: 20px;
    width: 100px;
    margin-top: 5px;
`;

const NavAvatar = styled.img`
    position: fixed;
    right: 20px;
    cursor: pointer;
    width: 40px;
    height: 40px;
`;