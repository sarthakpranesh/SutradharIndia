import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../config/firebase';
import Skeleton from 'react-loading-skeleton';
import 'firebase/firestore';
import 'firebase/database';

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
    const [orderType, setOrderType] = useState('')

    useEffect(() => {
        firebase.firestore().collection('products').doc(type).get()
            .then((docSnap) => docSnap.data())
            .then((data) => data.items[index])
            .then((item) => setProduct(item))
            .catch((err) => console.log(err))
    }, [index, type])

    const placeOrder = () => {
        if (email === "") {
            return alert('Please fill your email address!')
        }

        if (mobile === "") {
            return alert('Please fill your mobile number!')
        }

        if (address === "") {
            return alert('Please fill your address!')
        }

        if (orderType === "") {
            return alert('Please select a payment method!')
        }
        const uid = firebase.auth().currentUser.uid
        firebase.database().ref("orders").child(uid).set({uid, email, mobile, address, id, orderTime: Date.now(), orderType, payment: false})
            .then((r) => {
                if (orderType === "cod") {
                    alert("Order placed, you'll soon receive a confirmation mail!")
                } else if (orderType === "op") {
                    console.log("Send to payment gateway")
                }
            })
            .catch((err) => console.log(err))
    }

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
                    <Input title="Payment Type: " setValue={setOrderType} name="orderType" type="radio" radioArr={[{title: "Cash on Delivery", value: "cod"}, {title: "Online Payment", value: "op"}]} />
                    <br />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Button onClick={placeOrder} style={{margin: 'auto', marginTop: '20px'}}>Order Now</Button>
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
