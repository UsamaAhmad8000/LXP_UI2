import { Grid, Paper, Typography, Rating , createTheme} from "@mui/material";
import { ThemeProvider, Button } from "@mui/material";  
import {RateReview} from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";

const theme = createTheme({
    components: {
        MuiTypography:{
        variants: [
            {
                props: {
                    variant: "body2",
                },
                style: {
                    fontSize: 11,
                },
            },
            {
                props: {
                    variant: "body3",
                },
                style: {
                    fontSize: 9,
                },
            },
        ],
        },
    },
});

function UniversityCard ({university}) {
    return (
    <Grid item xs={3} >
        <ThemeProvider theme={theme}>
        <Paper elevation={3}>
            <img 
            src={university.image}
            alt=""
            className="img"
            />
            <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2" >{university.name}</Typography>
            <Box 
            sx={{
                display: "flex",
                alignItems: "center", 
            }}> 
                <RateReview sx={{width: 12.5}} />
                <Typography variant= "body2" component="p" marginLeft={0.5}>
                    Rank {university.rank}
                </Typography>
            </Box>
            <Box 
            sx={{
                display: "flex",
                alignItems: "center",
                
            }}
            marginTop={3}> 
                <Rating 
                name="read-only" 
                value={4.5} 
                readOnly 
                precision={0.5} 
                size="small"
                 />
                <Typography variant= "body2" component="p" marginLeft={0.5} noWrap>
                    {university.rating}
                </Typography>
                <Typography variant= "body3" component="p" marginLeft={0.5} noWrap>
                    ({university.numberOfReviews} reviews)
                </Typography>
            </Box>
            <Box>
            <Button size="small">
                <a href={university.link} class="card-link">Apply </a>
            </Button>
            </Box>
            </Box>
        </Paper>
        </ThemeProvider>
    </Grid>
    );
}

export default UniversityCard