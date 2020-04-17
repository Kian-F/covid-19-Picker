import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from 'classnames';
import styles from "./Cards.module.css";
import CountUp from "react-countup";
// destructure the data and second destructure the rest
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      {/* a grid type of container, this will content all other items */}
      <Grid container spacing={3} justify="center">
        {/* a grid type of item inside of this will be a conponent of type card */}
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected )}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {/* {confirmed.value} */}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              {" "}
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered )}>

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
  <Typography variant="h5">
      {/* {recovered.value} */}
      <CountUp
      start={0}
      end={recovered.value}
      deuration={2}
      separator=','
      />
      </Typography>
  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              {" "}
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths )}>

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
            <CountUp
                 start={0}
                 end={deaths.value}
                 deuration={2}
                 separator=','
                />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
