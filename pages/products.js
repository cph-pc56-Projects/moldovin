import Layout from '../components/Layout';
//import { Button } from 'react-bootstrap';

const products = (props) => {
    return (
        <Layout>
            <div className={'w3-display-container w3-green'} style={{ height: '300px' }}>
                <div className={'w3-display-middle'}>
                    <p className='w3-red w3-padding'>Products</p>
                    <Button>Show</Button>
                </div>     
            </div>
            <p>Best Wine</p>
        </Layout>

    )
}

export default products;