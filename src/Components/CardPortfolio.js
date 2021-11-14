import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPortfolio(props) {
  return props.portfolio ? (
    <div className={props.className}>
      <Card sx={{ maxWidth: 345, height:'100%'}} key={props.portfolio.id}>
        <CardMedia
          component="img"
          height="140"
          image={props.portfolio.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.portfolio.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.portfolio.info}
          </Typography>
            {
              props.portfolio.languagesIcons.map((item)=>{
                  return (
                      <i class={item}key={item}></i>
                  )
              })
            }
            <br></br>
            <a href={props.portfolio.source} target="_blank" rel="noopener noreferrer"> <Button size="small">Learn More</Button></a>
        </CardContent>
      </Card>
    </div>
  ) : null ;
}