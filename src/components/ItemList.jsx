import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ItemList = (props) => {
const {title, id, price, image}= props;
return (
    
      

<Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="140"
  image={image}
  alt="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {id}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">{price}</Button>
  <Button size="small">{image}</Button>
</CardActions>
</Card>
    )
  


}


export default ItemList