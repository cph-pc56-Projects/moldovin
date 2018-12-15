import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';


const styles = {
  card: {
    height: 400,
    width: 230
    // minWidth: 275,
    // maxWidth: 250,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 3,
  },
  media: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: "245px",
    width: '85px',
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

function WineCard(props) {
  const { classes, wineBottle } = props;  
 
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={wineBottle.displayImage}
        title={wineBottle.title}
      />
      <CardContent>
        <Typography variant="h6" component="h6">
          {wineBottle.name}
        </Typography>
        <Typography color="textSecondary" noWrap>
          {wineBottle.type}
        </Typography>

      </CardContent>
      <CardActions>
        <div className={classes.button}>
          <Link href={`/wine?id=${wineBottle.id}`}>
            <Button
              size="small"
              variant='contained'
              style={{ background: '#404040', color: 'white' }}
            >
              {wineBottle.price} DKK
          </Button>
          </Link>
        </div>

      </CardActions>
    </Card>
  );
}

WineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(WineCard);
