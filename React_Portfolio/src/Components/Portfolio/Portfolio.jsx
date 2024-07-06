import React, { useState } from "react";
import "./Portfolio.css";
import portdata from './Portfolioapi'

const Portfolio = () => {
    const [items,setItems]=useState(portdata)
    const filterItem=(catItems)=>{
        const updateItems=portdata.filter((curElem)=>{
            return curElem.category===catItems;
        });
        setItems(updateItems);
    }
  return (
    <section className="portfolio">
      <div className="container">
        <div className="main">
          <h1 className="text-center text-light pt-5">Check My Portfolio</h1>
          <div className="menu text-center pt-3">
            <button type="button" className="btn btn-light me-3" onClick={()=>setItems(portdata)}>
              All
            </button>
            <button type="button" className="btn btn-light me-3" onClick={()=>filterItem('product')}>
              Products
            </button>
            <button type="button" className="btn btn-light me-3" onClick={()=>filterItem('web page')}>
              Web Pages
            </button>
            <button type="button" className="btn btn-light me-3" onClick={()=>filterItem('web app')}>
              Web Apps
            </button>
            <button type="button" className="btn btn-light me-3" onClick={()=>filterItem('mobile app')}>
              Mobile Apps
            </button>
          </div>
          <div className="product pt-5">
            <div className="row">
                {
                    items.map((elem)=>{
                        const {id,img}=elem;
                        return(
                            <div className="col-sm-12 col-md-12 col-lg-3 col-12 my-3" key={id}>
                            <div className="img">
                            <img src={img} alt="" />
                            </div>
                        </div>
                        )
                    })
}  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
