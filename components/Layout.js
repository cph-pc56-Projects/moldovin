import Head from 'next/head';
import NavMenu from '../components/NavMenu'

const Layout = (props) => (
    <div>
        <Head>
            <title>MoldoVin</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        </Head>
        <NavMenu />
        {props.children}
    </div>
)
export default Layout;