import React from 'react'
import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper';
import PropTypes, { number } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CartItem from '../components/cart/cartItem'
import OrderSummary from '../components/cart/OrderSummary';
import { connect } from 'react-redux'
import InjectRedux from '../components/InjectRedux';
import * as actions from '../store/actions/cart';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minHeight: '300px',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },


});

class Cart extends React.Component {

    render() {
        const { classes, cart, products } = this.props
        const cartItems = cart.cartItems;
        const wineBottles = products.wines;
        let ItemsInCart = null
        if (cartItems.length == 0) {
            ItemsInCart = (<h1 className={'w3-center'}>No bottles in your cart :(</h1>)
        } else {
            ItemsInCart = (
                <div>
                    <Typography variant='title'>
                        Your bottles
                    </Typography>
                    {
                        cartItems.map(cartItem => {
                            const wineBottle = wineBottles.filter(item => item.id == cartItem.productId)
                            return (
                                <CartItem
                                    key={cartItem.productId}
                                    cartItem={cartItem}
                                    wineBottle={wineBottle}

                                />
                            )
                        })
                    }
                </div>
            )
        }

        return (
            <Layout>
                <div className={'w3-contaier'}>
                    <div className={'w3-center w3-white'}>
                        <h1>Cart</h1>
                    </div>
                    <div className={classes.root}>
                        <Grid container spacing={8} justify='center'>
                            <Grid item xs={12} sm={8} md={8} lg={4}>
                                <Paper className={`${classes.paper} ${classes.paperRoot}`}>
                                {ItemsInCart}
                                </Paper>
                            </Grid>
                            {cartItems.length == 0 ? ' ' :<OrderSummary/>}                            
                        </Grid>
                    </div>

                </div>
            </Layout>
        )
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: () => dispatch(actions.addItemToCart())
    }
}

export default InjectRedux(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart)));