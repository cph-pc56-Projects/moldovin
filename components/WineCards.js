import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WineCard from './wineCard';
import InjectRedux from '../components/InjectRedux';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 300,
        width: 250,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class WineCards extends React.Component {
    state = {
        spacing: '16',
    };

    render() {
        const { classes, wines } = this.props;
        const { spacing } = this.state;        


        return (
            <Grid container className={classes.root} spacing={16} zeroMinWidth>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {wines.map(wineBottle => (
                            <Grid key={wineBottle.id} item>
                                <WineCard wineBottle={wineBottle}/>
                            </Grid>
                        ))}
                        
                        {/* {[0, 1, 2, 3, 4].map(value => (
                            <Grid key={value} item>
                                <WineCard />
                            </Grid>
                        ))} */}
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

WineCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        wines: state.products.wines
    }
}

export default InjectRedux(connect(mapStateToProps)(withStyles(styles)(WineCards)));