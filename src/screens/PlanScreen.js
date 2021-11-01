import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from '../firebase'

function PlanScreen({name, description, isSubscribed, prices, productId}) {
    const [products , setProducts ] = useState([])

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

    const loadCheckout = (e) => {
        console.log(e.data)
    }
    
    return (
        <PlanScreenMain>
                    <PlanScreenPlan>
                        <PlanScreenInfo>
                            <h5>{name}</h5>
                            <h6>{description }</h6>
                        </PlanScreenInfo>
                                <PlanScreenButton className={`${isSubscribed && "disabled"}`}
                                    // onClick={() => !isSubscribed && loadCheckout(prices)}
                                    >
                                    {isSubscribed ? 'Current Package' : 'Subscribe'}
                                </PlanScreenButton>
                    </PlanScreenPlan>
        </PlanScreenMain>
    )
}

export default PlanScreen
const PlanScreenMain = styled.div ``;

const PlanScreenPlan = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 20px;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
`;

const PlanScreenInfo= styled.div `  
`;

const PlanScreenButton = styled.button`
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background-color: #e50914;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;

        &.disabled{
            background-color: gray !important;
        }
`;