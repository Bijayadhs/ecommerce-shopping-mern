import React from 'react'
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';




function HomeScreen() {
    return (
        <>
            <h1>Latest Produts</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} xl={3}>
                        <Product key={product._id} product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
