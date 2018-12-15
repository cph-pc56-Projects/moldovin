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
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            
        </Head>
        <style jsx global>{`
            body { 
                background: #f1f2f2;                
            }
        `}</style>
        <NavMenu />
        {props.children}        
    </div>

            <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">

            <a href = "https://instagram.com/moldovin.dk?utm_source=ig_profile_share&igshid=ve95kp57ph82">
             <i className={"fa fa-instagram"}></i>
             </a>
              <a href={"https://www.facebook.com/MoldoVin/"} target={"u_blank"}>
                <i className={"fa fa-facebook w3-hover-text-indigo"}></i>
              </a>
              <a href={"https://www.linkedin.com/company/moldovin/"} target={"u_blank"}>
                <i className={"fa fa-linkedin w3-hover-text-indigo"}></i>
              </a>

            </footer>
         </div> 

)

export default Layout;