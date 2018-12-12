import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import InjectRedux from '../InjectRedux';
import { connect } from 'react-redux';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Review(props) {
  const { classes, cart } = props;
  console.log('oder reiew cart', props)

  // Displaying cart products in order summary
  const wines = props.products.wines;
  const listOfProducts = [];
  cart.cartItems.forEach(item => {
    wines.map(bottle => {
      if (bottle.id == item.productId)
        listOfProducts.push({ name: bottle.name, desc: bottle.type, price: bottle.price, quantity: item.quantity, total: item.total })
    })
  })


  let itemsTotal = cart.cartItems.reduce((sum, itemTotal) => {
    return sum + Number(itemTotal.total)
  }, 0)

  const shipping = 12;
  itemsTotal += shipping;


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {listOfProducts.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={`Qnt: ${product.quantity} x Price: ${product.price}`} />
            <Typography variant="body2">{product.total}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText secondary="Shipping" />
          <Typography variant="subtitle2" className={classes.total}>
            12 DKK
          </Typography>          
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {itemsTotal} DKK
          </Typography>          
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {shipping}
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  }
}

export default InjectRedux(connect(mapStateToProps)(withStyles(styles)(Review)));
