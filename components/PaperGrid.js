import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Winecard from './wineCard';

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

class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };    

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={16} zeroMinWidth>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0, 1, 2, 3, 4].map(value => (
                            <Grid key={value} item>
                                <Winecard  />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);