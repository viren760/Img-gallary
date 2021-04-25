import React from 'react'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


export const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <div className='navvv'>
        <button className="btn btn-dark" >Home <span class="sr-only">(current)</span></button>
       </div> 
      </li>
      <li className="nav-item">
      </li>
      <div className='form-group'>
      <div className='navvv'>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
        </div> 
      </div>
    </ul>
    <div className='navvv'>
     <span> 
       <NotificationsActiveIcon/>
      </span>
      </div>
      <div className='navvv'>
      <span>
      <QuestionAnswerIcon/>
    </span>
    </div>
  </div>
</nav>
             
        </div>
    )
}

export default Navbar
