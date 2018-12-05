import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

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
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <hr />
                <Grid container spacing={16}>
                    <Grid item>
                        <div className={classes.image}>
                            <img className={classes.img} alt="complex" src="/static/assets/DulceLacrima.png" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography variant="h5" >
                                    Wine Name
                                </Typography>
                                <Typography gutterBottom color='textSecondary'>
                                    produced by
                                </Typography>
                                <Typography gutterBottom>wine type</Typography>
                                <Typography gutterBottom>wine grapes</Typography>
                                <Typography>
                                    Quantity
                                    <Input
                                        className={classes.input}
                                        type='number'
                                        value='1'
                                    />
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button size='small' color='secondary'>Remove</Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant='display1'>$19.00</Typography>
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

export default withStyles(styles)(CartItem);