import Layout from '../components/Layout';
import WineCard from '../components/wineCard';
import WineCards from '../components/WineCards'
import InjectRedux from '../components/InjectRedux';
import { connect } from 'react-redux';

const products = (props) => {    
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

    )
}

export default InjectRedux(connect(state=>state)(products));