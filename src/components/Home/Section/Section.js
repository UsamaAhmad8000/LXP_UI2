import React from 'react';
import { Grid, Typography, Box, IconButton, Button } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import useStyles from '../../../assets/styles/styles';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SectionButton from './SectionButton';

const Section = () => {
  const classes = useStyles();

  const sectionButton = [
    {
      id: 1,
      icon: <SchoolIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'BS Computer Science',
        url:''
    },
    {
      id: 2,
      icon: <CastForEducationIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'BS Software Engineering',
    },
    {
      id: 3,
      icon: <HistoryEduIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'BS Information Tecnology',
    },
  ];

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Solving world problems through various web applications using efficient programs and tools',
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Through team work, we collaborate and deliver quality projects of high standards',
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Flexible payment plan is applicable to all our services',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <SectionButton/>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {sectionButton.map((item) => (
        <IconButton
        width= '40%'
        item
        xs={6}
        md={3.5}
        minHeight={300}
        key={item.id}
        className={classes.sectionGridItem}
      >
           {item.icon}
        <Typography>{item.sentence}</Typography>
        </IconButton>
       ))}
      </Box>
      
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;