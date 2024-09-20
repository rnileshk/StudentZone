import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prodcut) => prodcut.id == id);
    //  console.log(filterProduct)
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (suman) => suman.category === product.category
    );

    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.address}</p>
        </div>
      </div>
      <div className="containts">
        <div className="img">
          <img src={product.imgSrc1} alt="" />
        </div>
        <div className="img">
          <img src={product.imgSrc2} alt="" />
        </div>
        <div className="img">
          <img src={product.imgSrc3} alt="" />
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
            <form action="https://api.web3forms.com/submit" method="POST" method="POST" >
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
};

export default ProductDetail;
