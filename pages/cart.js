import React from 'react'
import Layout from '../components/Layout'

class Cart extends React.Component {

    render() {
        return (
            <Layout>
                <div className={'w3-container'}>
                    <div className={'w3-center w3-white'}>
                        <h1>Cart</h1>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Cart;