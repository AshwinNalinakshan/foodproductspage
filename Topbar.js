import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { atom, selector, useRecoilValue } from 'recoil';
function Topbar() {
    const textStat = atom({
        key: 'cartv', 
        default: 0, 
      });
      const cartv=useRecoilValue(textStat)
  return (
    <div>
      <hr/>
      <div className='titlebar'>
      <p id='title'>UNI Resto Cafe</p>
      <span>
      <label >My Orders</label>
      <Badge showZero badgeContent={cartv} color="error"  >
      <ShoppingCartIcon fontSize='medium' color="action" />
      </Badge>
      </span>
      </div>
    </div>
  )
}

export default Topbar
