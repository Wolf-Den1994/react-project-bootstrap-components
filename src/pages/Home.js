import React, {useState} from 'react';
import './Home.scss';

import {Container, Row, Col} from "react-bootstrap";
import Confirmation from "../Components/Confirmation";
import PizzaCard from "../Components/PizzaCard";
import pizzas from '../data.json';

const Home = () => {
    const [ordered, setOrdered] = useState(false);

    function displayConfirmation() {
        setOrdered(true);

        setTimeout(() => {
            setOrdered(false);
        }, 3000);
    }

    return (
        <div className="wrapper">
            <Container>
                {ordered && <Confirmation toggle={setOrdered} /> }
                <Row>
                    {pizzas.map(data => (
                        <Col xs={3} className="mb-5" key={`${data.id}`}>
                            <PizzaCard data={data} setOrdered={displayConfirmation} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;