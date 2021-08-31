import React from 'react';
import {Toast} from "react-bootstrap";

const Confirmation = ({toggle}) => {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong style={{marginRight: "auto"}}>Your order is in the oven!</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>
                Your delicious pizzas will be with you in 30 minutes!
            </Toast.Body>
        </Toast>
    );
};

export default Confirmation;