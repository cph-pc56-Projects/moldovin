import Head from 'next/head';
import NavMenu from '../components/NavMenu'
import '../css/style.css';

const Layout = (props) => (
    <div>
        <Head>
            <title>MoldoVin</title>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <style jsx global>{`
            body { 
                background: #f1f2f2;
                
            }
        `}</style>
        <NavMenu />
        {props.children}
    </div>
)
export default Layout;