import Layout from '../components/Layout';
import WineCard from '../components/wineCard';
import WineCards from '../components/WineCards'

const products = (props) => {
    return (
        <Layout>
            <div className={'w3-display-container w3-green'} style={{ height: '300px' }}>
                <div className={'w3-display-middle'}>
                    <p className='w3-red w3-padding'>Products</p>
                    <Button>Show</Button>
                </div>     
            </div>
        </Layout>

    )
}

export default products;