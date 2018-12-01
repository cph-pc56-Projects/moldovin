import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'Lacrima Dulce',
    imgPath:
      '/static/assets/bottles/LacrimaDuulce.png',
  },
  {
    label: 'Ch',
    imgPath:
      '/static/assets/bottles/2-whites-1-red.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      '/static/assets/bottles/mimi-chardonnay-2.jpg',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      '/static/assets/bottles/Mimi-Chardonnay.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      '/static/assets/bottles/Mimi-Rose.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      '/static/assets/bottles/Mimi-Rosu-De-Bulboaca.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
  }
];

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

class TextMobileStepper extends React.Component {
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
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
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

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
