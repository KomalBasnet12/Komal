import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const[loading,setLoading]=React.useState(true);
    const navigate = useNavigate();
    const[blogs,setBlogs] = React.useState([]) 
  const getBlogs = async () =>{
        const res  = await axios.get(
        "https://648fc4141e6aa71680ca0b5f.mockapi.io/blog"
        );
    setBlogs(res.data);
    console.log(res.data);
    setLoading(false);
  };
  React.useEffect(()=>{
    getBlogs();

  },[])//array dependency

  return (
    <Box sx= {{
     display:"flex" ,
      gap:2,
      justifyContent:"center",
      flexWrap: "Wrap",
      }}
      >
        
        {loading? (
            <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
                <CircularProgress/>
            </Box>
        ) : blogs.map((data)=>{
            return (
                <Card key={data.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small" color="primary" onClick={() =>navigate(`/blog/${data.id}`)}>
            Learn More</Button>
      </CardActions>
    </Card>
            )
         })
        }
    </Box>
  );
}