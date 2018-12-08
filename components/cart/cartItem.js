import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { connect } from 'react-redux'
import InjectRedux from '../InjectRedux';
import * as actions from '../../store/actions/cart';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    input: {
        background: 'white',
        color: 'black',
        paddingLeft: '5px',
        width: '40px',
        marginLeft: '10px'
    },
});

class CartItem extends React.Component {

    removeItem = () => {
        const bottleId = this.props.wineBottle[0].id;
        this.props.onRemoveItem(bottleId);
    }

    render() {
        const { classes, wineBottle, cartItem } = this.props;
        const [bottle] = wineBottle;        

        return (
            <div className={classes.root}>
                <hr />
                <Grid container spacing={16}>
                    <Grid item>
                        <div className={classes.image}>
                            <img className={classes.img} alt="complex" src={bottle.displayImage} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={8}>
                            <Grid item xs>
                                <Typography variant="h5" >
                                    {bottle.name}
                                </Typography>
                                <Typography gutterBottom color='textSecondary'>
                                    produced by {bottle.producer}
                                </Typography>
                                <Typography gutterBottom>{bottle.type}</Typography>
                                <Typography gutterBottom>{bottle.grapes}</Typography>
                                <Typography>
                                    Quantity
                                    <Input
                                        className={classes.input}
                                        type='number'
                                        value={cartItem.quantity}
                                    />
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button 
                                size='small' 
                                color='secondary'
                                onClick={this.removeItem}
                                >Remove</Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>{cartItem.total} DKK</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

CartItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItem: (productId) => dispatch(actions.removeItemFromCart(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(CartItem)));