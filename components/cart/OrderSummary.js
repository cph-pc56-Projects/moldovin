import React from 'react'
import Paper from '@material-ui/core/Paper';
import PropTypes, { number } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import InjectRedux from '../InjectRedux';
import { connect } from 'react-redux'

const styles = theme => ({

    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    }

});

class OrderSummary extends React.Component {
    render() {
        const { classes, cart } = this.props
        const items = cart.cartItems;
        const itemsTotal = items.reduce((sum, itemTotal) => {
            return sum + Number(itemTotal.total)
        }, 0)       
        let isFull = true;
        if(items.length == 0)
            isFull = false
        return (
            <React.Fragment>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant='title'>
                            Order Summary
                        </Typography>
                        <Grid container justify='space-between'>
                            <Grid item xs={6}>
                                <Typography variant='subtitle1'>
                                    Items
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Delivery
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle1'>{itemsTotal} DKK</Typography>
                                <Typography variant='subtitle1'>12 DKK</Typography>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid container justify='space-between'>
                            <Grid>
                                <Typography variant='title' >
                                    Total:
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='title'>
                                    {itemsTotal + 12} DKK
                                </Typography>
                            </Grid>
                        </Grid>
                        <div className={'w3-center w3-margin-top'}>
                            <Link href='/checkout'>
                                <Button
                                    variant='contained'
                                    style={{ color: 'white', background: 'green' }}
                                    color='primary'
                                    fullWidth
                                    
                                >
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

OrderSummary.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default InjectRedux(connect(mapStateToProps)(withStyles(styles)(OrderSummary)));