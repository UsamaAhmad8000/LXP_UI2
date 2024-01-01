import React from "react";
import Search from "../Search/Search";
import ImageHero from "../../../assets/images/Color-LXP.svg";

import { ImageList } from "@mui/material";
import { Grid, Typography, Button, Box } from '@mui/material';
import useStyles from '../../../assets/styles/styles';

const Hero = () => {
  const classes = useStyles();
  const imageURL =  "https://www.myperfectresume.com/wp-content/uploads/2020/05/describe-your-educational-background.jpg";
  return (
    
    <Box
    sx={{backgroundImage: `url(${imageURL})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'}}
    className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <ImageList cols={1} flexWrap= 'nowrap'
          sx={{ width: 150}}>
          <img alt='hero' src={ImageHero} />
          </ImageList>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
          My University Guide
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          Gain exclusive access to detailed information on each institution
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
        <Search/>
          {/* <img src={myteam} alt="My Team" className={classes.largeImage} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;