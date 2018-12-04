import Head from 'next/head';
import NavMenu from '../components/NavMenu'
import '../css/style.css';

// Setting up redux in the layout component as it is the one
// who wraps every other component in the app
// this gives us access to the redux store anywhere in the app
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import orderReducer from '../store/reducers/order';
import productsReducer from '../store/reducers/products';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    order: orderReducer,
    products: productsReducer
})
// compose enhancer is for redux plugin in dev tools
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


const Layout = (props) => (  


    <Provider store={store}>
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
        <NavMenu />
            {props.children}  

            <div class="footer">
             <style jsx>{` 
             position: fixed;
             left: 0;
             bottom: 0;
             height:10%;
             width: 100%;
             background-color: grey;
             color: white;
             text-align: center;   
             `}
            </style>
                 <a href = "https://instagram.com/moldovin.dk?utm_source=ig_profile_share&igshid=ve95kp57ph82">
                 <i class="fa fa-instagram"></i>
                 Instagram</a>
                 <a href = "http://moldovin.dk/">
                 <i class="fa fa-facebook"></i>
                 website</a>
                 <a href = "https://www.facebook.com/MoldoVin/">
                 <i class="fa fa-facebook"></i>
                 Facebook</a>
              </div>
            </div> 

              
    </Provider>
    
)

export default Layout;