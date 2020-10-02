import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../config/firebase';
import Skeleton from 'react-loading-skeleton';
import 'firebase/firestore';

import SectionContainer from '../../components/SectionContainer/SectionContainer.js';
import Button from '../../components/Button/Button.js';
import Input from '../../components/Input/index.js';

import './styles.css';

const OrderScreen = () => {
    const {id} = useParams()
    const [type, index] = id.split('@@@')

    const [product, setProduct] = useState(null)

    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        firebase.firestore().collection('products').doc(type).get()
            .then((docSnap) => docSnap.data())
            .then((data) => data.items[index])
            .then((item) => setProduct(item))
            .catch((err) => console.log(err))
    }, [index, type])

    const content = () => {
        if (product === null) {
            return (
                <div>
                    <h2 className="orderScreenMainHeading">Order with Us</h2>
                    <div className="orderScreenSubContainer">
                        <Skeleton width="200px" height="200px" />
                        <h3 className="orderScreenSubHeading"><Skeleton /></h3>
                        <Skeleton width="200px" height="300px"/>
                        <br />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Button style={{margin: 'auto', marginTop: '20px'}}><Skeleton /></Button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h2 className="orderScreenMainHeading">Order with Us</h2>
                <div className="orderScreenSubContainer">
                    <img class="orderScreenImage" src={product.img} alt="Sutradhar India Grass Utils" />
                    <h3 className="orderScreenSubHeading">{product.name}</h3>
                    <Input setValue={setEmail} title="Email Address" placeholder="Enter your email" type="email" />
                    <Input setValue={setMobile} title="Mobile Number" placeholder="Enter your mobile number" type="mobile" />
                    <Input setValue={setAddress} title="Delivery Address" placeholder="Enter your address" type="textarea" />
                    <br />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Button style={{margin: 'auto', marginTop: '20px'}}>Order Now</Button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="orderScreenMain">
            {content()}
        </div>
    );
}

export default OrderScreen;
