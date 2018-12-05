import React from 'react'
import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper';
import PropTypes, { number } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CartItem from '../components/cart/cartItem'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

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
        const { classes } = this.props
        return (
            <Layout>
                <div className={'w3-container'}>
                    <div className={'w3-center w3-white'}>
                        <h1>Cart</h1>
                    </div>
                    <div className={classes.root}>
                        <Grid container spacing={8} justify='center'>
                            <Grid item xs={12} sm={8} md={8} lg={4}>
                                <Paper className={`${classes.paper} ${classes.paperRoot}`}>
                                    <Typography variant='title'>
                                        Your bottles
                                    </Typography>
                                    <CartItem />
                                    <CartItem />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={3}>
                                <Paper className={classes.paper}>
                                    <div className={'w3-center'}>
                                        <Link href='/checkout'>
                                            <Button variant='contained' style={{ color: 'white', background: 'green' }}>Checkout</Button>
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>

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

export default withStyles(styles)(Cart);