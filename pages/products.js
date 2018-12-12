import React from 'react'
import Layout from '../components/Layout';
import WineCards from '../components/WineCards'
import InjectRedux from '../components/InjectRedux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/products'

class Products extends React.Component  {        
    render() {    
    return (
        <Layout>
        
            <div className={'w3-container w3-margin'}>
                <div className={'w3-container w3-center w3-white'}>
                    <h2>Discover Our Wine Collection</h2>
                </div>
                <div className={'w3-margin-top'}>
                    <WineCards />                    
                </div>
            </div>       
            
        
        </Layout>

    )}
    
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onSetProducts: dispatch(actions.initProducts())
//     }
// }

export default InjectRedux(connect(null,null)(Products));