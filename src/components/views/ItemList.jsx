import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button, Typography, Box}  from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconPlus from '@mui/icons-material/Add'

    const ItemList = (props) => {
    const {title, id, price, image}= props;
    return (
      <Card sx={{ maxWidth: 345, my: 2 }} elevation={0}>
        <Box className="cardBox">
          <CardMedia
            component="img"
            height="150"
            image={image}
            alt={image}
          />
          <Button variant="contained" startIcon={<IconPlus/>}>Add</Button>
        </Box>
        <CardHeader
          title={title}
          subheader={
            <Typography variant="body2" color="primary">
              Organic 
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {price}
          </Typography>
          <Typography sx={{display:"none"}}>
             {id}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" color="error">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" variant="text">View detail</Button>
        </CardActions>
      </Card>
    );
  }
export default ItemList