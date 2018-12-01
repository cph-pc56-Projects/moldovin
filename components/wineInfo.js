import React from 'react';
import PropTypes, { number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: '654px',
    width: 400
  },
  input: {
    background: 'white',
    paddingLeft: '5px',
    width: '40px'
  },
  btn: {
    padding: '4px',
    margin: '4px',
    background: 'white',
    color: 'black'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }

});



class WineInfo extends React.Component {
  state = {
    price: 125,
    quantity: 1,
    total: 125
  }

  validateQuantity = (number) => {
    let quantity;
    if (number <= 0 || number > 50) {
      quantity = 1
    } else {
      quantity = number
    }
    this.setState({
      quantity: quantity,
      total: this.state.price * quantity
    })
  }

  handleInputChange = (event) => {
    this.validateQuantity(event.target.value)
  }
  handleIncrement = () => {
    let number = this.state.quantity + 1;
    this.validateQuantity(number)
  }
  handleDecrement = () => {
    let number = this.state.quantity - 1;
    this.validateQuantity(number)
  }

  render() {
    const { classes } = this.props;
    const { price, total } = this.state

    return (
      <div>
        <Paper className={classes.root + ' w3-display-container'} elevation={1}>
          <Typography className={'w3-center'} variant="h4" component="h2">
            Lacrima Dulce
          </Typography>
          <Typography className={'w3-center'} color='textSecondary'>
            produced by Cricova
          </Typography>
          <hr />
          <Typography variant='subtitle1'>
            Wine Type:
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            Semisweet White Sparkling Wine
          </Typography>
          <Typography variant='subtitle1'>
            Description:
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            This luxury sparkling white wine is a perfect party wine. The semisweet flavor lends to easy consumption and leaves a very neutral and pleasant aftertaste. This wine is remarkable for its shiny light straw color, full, nicely-balanced taste and rich flowery bouquet with delicate aromas.
          </Typography>
          <Typography className={'w3-center'} variant='subtitle2' color='textSecondary' >
            <span>Alc 9.5% Vol</span>
            <span style={{ paddingLeft: '30px' }}>6° - 8°C</span>
          </Typography>
          <Typography variant='subtitle1'>
            Price: <span className={'w3-large'}>{price} DKK</span> incl VAT
          </Typography>
          <hr />
          <div className={'w3-row-padding'} style={{ height: '100px', background: '#404040', color: 'white' }}>
            <div className='w3-col s6  w3-center'>
              <h5>Total</h5>
              <h4>{total} DKK</h4>

            </div>
            <div className='w3-col s6  w3-center'>
              <h5>Quantity</h5>
              <div style={{ display: 'inline-block' }}>
                <button
                  className={'w3-circle w3-btn w3-tiny w3-grey w3-margin-right'}
                  onClick={this.handleDecrement}
                >
                  <span className={'w3-text-white'}>-</span>
                </button>
                <Input
                  className={classes.input}
                  type='number'
                  disableUnderline
                  value={this.state.quantity}
                  onChange={this.handleInputChange}

                />
                <button
                  className={'w3-circle w3-btn w3-tiny w3-grey w3-margin-left'}
                  onClick={this.handleIncrement}
                >
                  <span className={'w3-text-white'}>+</span>
                </button>
              </div>
            </div>
          </div>
          <hr />         
            <div className={'w3-display-bottommiddle w3-margin-bottom'}>
              <Button                
                variant='raised'
                color='primary'
              > Add To Cart
            <AddShoppingCartIcon className={classes.rightIcon} />
              </Button>
            </div>          
        </Paper>
      </div>
    );
  }
}

WineInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineInfo);
