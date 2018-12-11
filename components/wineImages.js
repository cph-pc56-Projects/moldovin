import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withRouter } from 'next/router'
import InjectRedux from './InjectRedux';
import { connect } from 'react-redux';

const styles = theme => ({

  root: {
    // maxWidth: 450,
    width: '400px',
    height: '654px',
    flexGrow: 1,
    backgroundColor: 'white'

  },

  img: {
    height: '600px',
    width: '400px',
    overflow: 'hidden',
    display: 'block',
    margin: 'auto'

  },
});

class WineImages extends React.Component {
  state = {
    activeStep: 0,
  };




  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const bottleId = this.props.router.query.id
    const wineBottle = this.props.products.wines.filter(item => item.id == bottleId)
    const [bottle] = wineBottle;    
    const wineImages = bottle.wineImages;
    const maxSteps = wineImages.length;

    return (
      <div className={classes.root}>
        <img
          className={classes.img}
          src={wineImages[activeStep].imgPath}
          alt={wineImages[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          style={{ backgroundColor: 'white' }}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}
WineImages.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default InjectRedux(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(withRouter(WineImages))));
