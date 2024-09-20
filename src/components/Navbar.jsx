import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { LuHeart } from 'react-icons/lu';
import { useAuth0, User } from "@auth0/auth0-react";



const Navbar = ({setData,cart}) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <a href={'/'} className="brand"><img className='logo' style={{width: '100px'}} src='/logo.png' alt='logo' /></a>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Items'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-danger position-relative">
              <LuHeart style={{fontSize:'1.5rem'}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            </Link>


            {isAuthenticated ? (
              <div className="items"><button className='logout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
          </button></div>
            ) : (
              <div className='items'><button className='login' onClick={() => loginWithRedirect()}>Log In</button></div>
            )}

        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper sticky-top">
            <a href={'/'}><div className='items'>Home</div></a>
            <div className='items'>About Us</div>
            <div className='items'>Contact Us</div>
            <div
            onClick={()=>setData(items)}
            className="items">All</div>
            <div
            onClick={()=>filterByCategory('Lodge')}
              className="items">Lodge</div>
            <div
            onClick={()=>filterByCategory('Mess')}
              className="items">Mess</div>
            </div>
          )
        }

    </header>
    </>
  )
}

export default Navbar