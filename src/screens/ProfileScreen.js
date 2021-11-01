import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import db, { auth } from '../firebase'
import PlanScreen from './PlanScreen'
import moment from 'moment'

function ProfileScreen() {
    const user = useSelector(selectUser)

    const [products , setProducts ] = useState([])

    var nextMonthDate = moment().add(1, 'months').format('DD-MM-YYYY');
    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get().then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('pricing').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices =  {
                        priceId : price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products)
        })
    }, [])
    const dispatch = useDispatch()
    return (

        <ProfileScreenMain>
            <Nav/>
            <ProfileScreenBody>
                <h1>Edit Profile</h1>
                <ProfileScreenInfo>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <ProfileScreenDetails>
                        <h2>{user.email}</h2>
                        <ProfileScreenPlans>
                            <h3>Plans</h3>
                            <p> Renewal Date: {nextMonthDate}</p>

                            {Object.entries(products).map(([productId, productData]) => {
                                
                            return (
                            <PlanScreen 
                                productId={productId}
                                name={productData.name}
                                description={productData.description}
                                isSubscribed={productData.isSubscribed}
                                priceId={ productData?.prices?.priceId}  
                            />
                            )
                            })}
                            <button onClick={() =>auth.signOut()}>Sign Out</button>
                        </ProfileScreenPlans>
                    </ProfileScreenDetails>
                </ProfileScreenInfo>
            </ProfileScreenBody>
        </ProfileScreenMain>
    )
}

export default ProfileScreen
const ProfileScreenMain = styled.div`
    height: 100vh;
    color: white;
`;

const ProfileScreenBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
    max-width: 800px;

    >h1 {
        font-size: 60px;
        font-weight: 400;
        border-bottom: 1px solid #282c2d;
        margin-bottom: 20px;
    }
`;

const ProfileScreenInfo = styled.div`
    display: flex; 

    >img {
        height: 100px;
    }
`;

const ProfileScreenDetails = styled.div`
    color: white;
    margin-left: 25px;
    flex: 1;

    >h2{
        background-color: gray;
        padding: 15px;
        font-size: 15px;
        padding-left: 20px;
    }
`;

const ProfileScreenPlans = styled.div`
    margin-top: 20px;

    >h3{
        border-bottom: 1px solid #282c2d;
        padding-bottom: 10px
    }
    >button {
        padding: 10px 20px;
        font-size: 1rem;
        width: 100%;
        color: #fff;
        background-color: #e50914;
        margin-top: 5%;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
    }
`;
