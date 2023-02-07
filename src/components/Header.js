import React from 'react'
import "../components/Header.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className='header'>
      {/* <h1>header</h1> */}
  
      {/* <img src="./src/img/bw.jpg" alt="img" /> */}
       <img className='logo'
       src="../img/wr1.jpg" height={100} alt="logo" />
     
        <div className="tab">
          <h1>Canteeno Tabs</h1>
        </div>
        <div className="login" >
       < AccountCircleIcon />
        </div>
       
       <div className="Cart">
       <LocalMallIcon/>
       </div>

    </div>
  )
}

export default Header
