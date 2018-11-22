import Layout from '../components/Layout';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const home = () => (


    <Layout >


        <div className={'bgImage w3-display-container'} style={{  }}>
            <div className={'w3-display-middle'} style={{ whiteSpace: 'nowrap' }}>
                <figure>
                    <img src={`../static/assets/logo.png`} />
                </figure>
                <div className={'w3-center'}>
                    <Button variant='contained' style={{ background: '#404040', color: 'white', marginRight: '10px' }}>About</Button>
                    <Link href='/products'>
                        <Button ariant='contained' style={{ background: '#EE4040', color: 'white' }}>Shop</Button>
                    </Link>
                </div>

            </div>
            <style jsx>{`
            .bgImage {
                background-image: url('../static/assets/purple-grapes.jpeg');
                height: 100vh;
                width: 100vw;
                
                
            }
            .bgImage {
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
            
        `}</style>
        </div>


    </Layout>


)

export default home;

//background-image: url('../static/assets/purple-grapes.jpeg')