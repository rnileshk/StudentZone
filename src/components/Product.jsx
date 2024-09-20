import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart , setCart}) => {
   
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "20rem" }}>
                    <Link to={`/product/${product.id}`}
                     style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>

                    <img
                      src={product.imgSrc}
                      className="card-img-top img"
                      alt="..."
                      />
                      </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">{product.location}</p>
                      <button
                      onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                       className="btn btn-danger"
                       >Add To Favourite</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

        <div className="footer">
        {
          location.pathname == '/' && (
            <div className="menu sticky-top">
            <a href={'/'}><div className='items'>Home</div></a>
            <div className='items'>About Us</div>
            <div className='items'>Contact Us</div>
            </div>
          )
        }

          <div class="form">
            <h1>SEND US A MESSAGE:</h1>
            <form action="https://api.web3forms.com/submit" method="POST" >
                <input type="hidden" name="access_key" value="2295bfcd-fd54-44ef-ad22-c8d2ed0a1524" />
                <p><span class="inputs wpcf7-form-control-wrap" data-name="your-name"><input size="22" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your name" value="" type="text" name="your-name" required /></span>
                </p>
                <p><span class="inputs wpcf7-form-control-wrap" data-name="your-email"><input size="22" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your e-mail" value="" type="email" name="your-email" required /></span>
                </p>
                <p><span class="inputs wpcf7-form-control-wrap" data-name="your-text"><input size="22" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Mobile No." value="" type="text" name="your-text" required/></span>
                </p>
                <p><span class="inputs wpcf7-form-control-wrap" data-name="your-message"><textarea cols="24" rows="3" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message" name="your-message" required></textarea></span>
                </p>
                <button class="btn" type="submit">SEND US</button>
            </form>
        </div>
        </div>
        <div className="tag"><h6>© 2024 Student Comfort Zone | All Rights Reserved </h6></div>
    </>
  );
}

export default Product;
