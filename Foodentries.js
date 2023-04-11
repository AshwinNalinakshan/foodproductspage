import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import './Foodentries.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Checkbox from '@mui/material/Checkbox';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { atom, useRecoilState } from 'recoil';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab  from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Container } from '@mui/material';


const data=[
  {color:'success',title:'Spinach Salad',value:'7.95',descri:'French Spinach,Mushroom and hard boiled egg served with warm boiled vinaigrette',calor:'15',cartvalue:0,pic:'../images/salad1.png'},
  {color:'error',title:'Traditional New England Seafood Chowder',value:'12',descri:'with clams, scallops and shrimp',calor:'30',cartvalue:0,pic:'../images/salad(6).jpg'},
  {color:'success',title:'Salad Bar Soup',value:'5',descri:'Flour Mixed with fresh green leafy vegetables',calor:'30',cartvalue:0,pic:'../images/salad(7).jpg'},
  {color:'error',title:'Chicken-Soup',value:'14.89',descri:'fresh as home-made chicken-soup',calor:'30',cartvalue:0,pic:'../images/salad(8).jpg'},
  {color:'error',title:'One-Pot-Vegetarian',value:'22',descri:'One-pot-vegetarian-Orzo-Vegetarian-Soup',calor:'25',cartvalue:0,pic:'../images/salad(9).jpg'},
  {color:'error',title:'low-carb-chicken-soup',value:'25',descri:'wholesomeyum_low-carb-chicken-soup-with-sphagerti-squash-paleo-glutten-free',calor:'45',cartvalue:0,pic:'../images/salad(5).jpg'},
      
]


function Foodentries() { 
  const textStat = atom({
    key: 'cartv', 
    default: 0, 
  });
 
  const[cartv,setv]=useRecoilState(textStat);
   const[clickn,setn]=useState(0);

  const [index, setIndex] = useState(0);
  return (
    
  
    <div>
     <Container maxWidth='lg'>
    <Tabs  aria-label="tabs" defaultValue={0}  >
    
    <TabList  variant="plain" sx={{backgroundColor:'white',borderBottom:"2px solid grey",borderRadius:'1px',
    
  }}>
    
      <Tab sx={{borderBottom:"1px solid blue",borderRadius:'1px'}}>Salads and Soup</Tab>
      <Tab >From The Beyond</Tab>
      <Tab>From the Hen House</Tab>
      <Tab>Fresh From the Sea</Tab>
      
    </TabList>
    
    <TabPanel value={0} sx={{ p: 2 }}>
      
      {data.map((item)=>(
     <><div className='Foodentries'>
      
          <div className='column1'>
            <Checkbox size='small' color={item.color} defaultChecked icon={<StopCircleOutlinedIcon />} checkedIcon={<StopCircleOutlinedIcon />} />
          </div>
          <div className='column2'>
            <h3 style={{fontSize:'16px'}}>{item.title}</h3>
            <h5 style={{fontSize:'12px'}}>SAR {item.value}</h5>
            <p style={{fontSize:'12px',color:'gray',fontFamily:'sans-serif'}}>{item.descri}</p>
            <div className='column2a'>
              <IconButton onClick={()=>{
                 
                item.cartvalue=item.cartvalue+1
                let n=clickn+1
                setn(n);
                setv(n);
                
                
              }
              } sx={{ color: 'white' }} size="small">
                <AddOutlinedIcon fontSize="inherit" />
              </IconButton>
              <p>{item.cartvalue}</p>
              <IconButton onClick={()=>{
                if(item.cartvalue>0){
                 item.cartvalue=item.cartvalue-1
                 let n=clickn-1
                 setn(n);
                 setv(n);
                }
              }} sx={{ color: 'white' }} size="small">
                <RemoveOutlinedIcon fontSize="inherit" />
              </IconButton>
            </div>{item.color=='success'?
            <p style={{color:'red',fontSize:'12px'}}>Customization available</p>:
            <p style={{color:'pink',fontSize:'12px'}}>Not available</p>
          }
          </div>
          <div className='column3'>
            <h5>{item.calor}calories</h5>
          </div>
          <div className='column4'>
            <img id='image' src={item.pic} alt='notfound'></img>
          </div>
        </div><hr /></>
        )
        )}
    
    </TabPanel>
    <TabPanel value={1} sx={{ p: 2 }}>
    <h1>empty</h1>  
    </TabPanel>
    <TabPanel value={2} sx={{ p: 2 }}>
      <h1>empty</h1>
    </TabPanel>
    <TabPanel value={3} sx={{ p: 2 }}>
    <h1>empty</h1>
  </TabPanel>
  </Tabs>
  
      </Container>
    </div>
  );
}

export default Foodentries