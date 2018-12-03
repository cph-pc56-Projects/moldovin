import Layout from '../components/Layout';
import WineCard from '../components/wineCard';
import WineCards from '../components/WineCards'

const products = (props) => {
    return (
        <Layout>
        <div>
            <div className={'w3-container w3-margin'}>
                <div className={'w3-container w3-center w3-white'}>
                    <h2>Discover Our Wine Collection</h2>
                </div>
                <div className={'w3-margin-top'}>
                    <WineCards />                    
                </div>
            </div>
       
        <div class="footer">
        <style jsx >{` 
        position: fixed;
        left: 0;
        bottom: 0;
        height: 40px;
        width: 100%;
        background-color: grey;
        color: white;
        text-align: center; 
       }  
        `}
       </style>
            <a href = "https://www.facebook.com/MoldoVin/">
            <i class="fa fa-facebook"></i>
            </a>
            <a href = "https://instagram.com/moldovin.dk?utm_source=ig_profile_share&igshid=ve95kp57ph82">
            <i class="fa fa-instagram"></i>
            </a>
            </div>
        </div>
        </Layout>

    )
}

export default products;