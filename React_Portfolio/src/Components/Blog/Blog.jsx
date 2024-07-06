import React, { useState } from 'react';
import './Blog.css'
import blogdata from './Blogapi';

const Blog = () => {
    const [items,setItems]=useState(blogdata)
  return (
   <>
   <section className="blog">
    <div className="container">
        <h1 className="text-center text-light pt-5">Blogs & Articles</h1>
        <div className="row">
            {
                items.map((elem)=>{
                    const{id,img,name,date,blog_name,blog_para}=elem;
                    return(
                        <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-3" key={id}>
                        <div className="box">
                            <img src={img} alt="" />
                            <div className="mainbox">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6 col-6">
                                    <p className="name text-dark  pt-3">{name}</p>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-6">
                                    <p className="date text-dark  pt-3">{date}</p>
                                </div>
                            </div>
                            <h1 className="blog_name text-dark  fs-3">{blog_name}</h1>
                            <p className="blog_para text-dark ">{blog_para}</p>
                            <button type="button" class="btn btn-dark ">
                        Read More
                      </button>
                      </div>
                        </div>
                    </div>
                    )
                })
            }
           
        </div>
    </div>
   </section>
   </>
  );
}

export default Blog;
