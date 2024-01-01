import React from 'react';
import UniversityCard from './UniversityCard';
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from "../../unidata.json"
import { Typography } from '@mui/material';
import Layout from '../../components/Layout/Layout';



function University () {
  return (
    <Layout>
      
      <Container sx={{marginY: 10}}>
        
        {cities.map((city)=> (
          <>
          <Typography
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}>
            {city.name } 
          </Typography>
          <Grid container spacing={5}>
            {city.universities.map((university, index) => (
            <UniversityCard university={university} key={index}/>))}
          </Grid>
          </>
        ))}
      </Container>
      </Layout>
  );
}

export default University;
