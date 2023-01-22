
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./Responsive.module.css"
import { useParams, Link as RouterLink } from 'react-router-dom';


const Responsive=(props)=>{
    const {id,images,p,h3,price}=props;
    console.log(props)
    const responsive ={
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
      };

    return(
      
        <Carousel responsive={responsive} className={styles.Carousel} >
            {
    props.details.map((el)=>(
    <div key={el.id} className={styles.cards} >
    <img src={el.images} alt="" />
    <p>{el.p}</p>
    <h3>{el.h3}</h3>
    <p>{el.price}</p>
       </div>
                ))
            } 
</Carousel>
       
    )
}



export default Responsive