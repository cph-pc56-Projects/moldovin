import Layout from '../components/Layout';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WineImages from '../components/wineImages';
import WineInfo from '../components/wineInfo'

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

class Wine extends React.Component {
    state = {
        spacing: '16',
    };


    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <Layout>
                <div className={'w3-container w3-margin'}>
                    <div className={'w3-container w3-center w3-white'}>
                        <h2>Check this</h2>
                    </div>
                </div>
                <div className={'w3-container w3-margin-top'}>
                    <Grid container className={classes.root} spacing={16} zeroMinWidth>
                        <Grid item xs={12}>
                            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                                <Grid item>
                                    <WineImages />
                                </Grid>
                                <Grid item>
                                    <WineInfo />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </div>

            </Layout>
        )
    }


}

Wine.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wine);