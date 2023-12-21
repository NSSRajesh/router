import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Navbar(){

        const [isMobile,setisMobile]=useState(false)

    return(
        <div>
            <header id='con'>
                <div className='logo'>
                    <h2>Logo</h2>
                </div>
                <ul className={isMobile? 'list' : 'unlist'} onClick={()=>setisMobile(false)}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/service'><li>Service</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
                <button className="burger-menu" onClick={()=>setisMobile(!isMobile)}>
                    {isMobile ? <h1>X</h1> : <h1>=</h1>}
                </button>
            </header>

            
        </div>
    )
}

export default Navbar;