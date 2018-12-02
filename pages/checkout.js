import React from 'react';
import Layout from '../components/Layout';
import CheckoutBox from '../components/checkout/Checkout';

class Checkout extends React.Component {


    render() {
        return (
            <Layout>
                <CheckoutBox />
            </Layout>
        )
    }
}

export default Checkout;