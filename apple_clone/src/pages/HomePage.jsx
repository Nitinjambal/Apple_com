import React from "react";
import styles from "./HomePage.module.css"
import Cards from "../Components/Cards";

function HomePage(){
    return(
       <div className={styles.Home}>
            <div className={styles.div} >
               <h1> Introducing the <br /> all-new HomePod.</h1>
                </div>
         <img src="https://www.apple.com/v/home/ax/images/heroes/homepod/hero_homepod_24__gc2r18ylea2q_largetall_2x.jpg" alt=""  style={{width:"100%",height:"300px"}}/>
         
         
         
          <div className={styles.Cards}>  
              
              <h1>MacBook Pro</h1> 
              <h2>Supercharged by M2 Pro and M2 Max</h2>
             <h2>Available starting 1.24</h2>
             <span>Learn more  </span>
             <span>   Order now</span>
             <div>
             <img src="https://www.apple.com/v/home/ax/images/heroes/macbook-pro-14-and-16/hero_mbp_preorder__caf0s6im2nqq_largetall_2x.jpg" alt="" style={{width:"100%",marginTop:"0px",padding:"0px",}}/>
             </div>
             </div>


             <div className={styles.Cards}>  
              
              <h1>Mac mini</h1> 
              <h2>Supercharged by M2 and M2 Pro</h2>
             <h2>Available starting 1.24</h2>
             <span>Learn more  </span>
             <span>   Order now</span>
             <div>
             <img src="https://www.apple.com/v/home/ax/images/heroes/mac-mini/hero_macmini_preorder__ixuialh97nyq_largetall_2x.jpg" alt="" style={{width:"100%",marginTop:"0px",padding:"0px",}}/>
             </div>
             </div>
             
 


         </div>
    )
}
export default HomePage;