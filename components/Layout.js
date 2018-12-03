import Head from 'next/head';
import NavMenu from '../components/NavMenu'
import '../css/style.css';

const Layout = (props) => (
    <div>
        <Head>
            <title>MoldoVin</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <NavMenu />
        {props.children}

        <div class="footer">
             <style jsx>{` 
             position: fixed;
             left: 0;
             bottom: 0;
             height:40px;
             width: 100%;
             background-color: grey;
             color: white;
             text-align: center;   
             `}
            </style>
                 <a href = "https://www.facebook.com/MoldoVin/">
                 <i class="fa fa-facebook w3-hover-text-indigo"></i>
                 </a>
                 <a href = "https://instagram.com/moldovin.dk?utm_source=ig_profile_share&igshid=ve95kp57ph82">                  <i class="fa fa-instagram"></i>
                 </a>
              </div>
    </div>
    
)
export default Layout;