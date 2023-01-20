import React from 'react'
import styles from "./Accessories.module.css"
import vidWave from "../videos/speakerWave.mp4"
import { FaSistrix } from "react-icons/fa";
import {ChevronDownIcon,SearchIcon} from "@chakra-ui/icons"


function Accessories() {
  return (
    <div className={styles.Container} >


    <div className={styles.nav}>
       <h2>Accessories</h2>
       <span>Browse all <ChevronDownIcon/> </span>
      </div>

{/* video section */}
     <div>
        <video src={vidWave} autoPlay loop muted></video>
      </div>
      
      {/* image section */}
      <div>
      <img src={require("../images/speaker.jpg")} style={{height:"350px",margin:"auto",width:"100%"}}/>
      </div>


{/* middle section */}
        <div className={styles.middle}>
          <div>
            <div><h1>Find the accessories you’re looking for.</h1></div>
             
             <div className={styles.searchbtn}>
              <div>
               <SearchIcon/>
               </div>
               
               <div>
            <input  type="text" placeholder=' Search accessories'/>
            </div>
             </div>
          </div>
          
        </div>



       {/* 2nd middle */}
        <div className={styles.bmiddle}>
            <span>Browse by Product</span>
           <span> Browse by Category</span>
           <hr />

           <div className={styles.images}>
            <div>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=75&hei=75&fmt=png-alpha&.v=1544482382615" alt="" />
            </div>
              

            <div>
             <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-ipad?wid=75&hei=75&fmt=png-alpha&.v=1544482382704" alt="" />
             </div>

             <div>
               <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-iphone?wid=75&hei=75&fmt=png-alpha&.v=1544482382650" alt="" />
               </div>

             <div>
             <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-watch?wid=75&hei=75&fmt=png-alpha&.v=1544482383418" alt="" />
             </div>

             <div>
             <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-tv?wid=75&hei=75&fmt=png-alpha&.v=1667595021278" alt="" />
             </div>

            </div>

            


        <div className={styles.productName}>
           <span>Mac</span>
           <span>iPad</span>
           <span>iPhone</span>
           <span>Watch</span>
           <span>TV & Home</span>
        </div>
            <hr />
        </div>



        {/* main products divs/card */}
           <div className={styles.productsDiv}>
                <div><h1>Featured Lunar New Year Accessories</h1></div>
             <div></div>
           </div>

        
    </div>
  )
}

export default Accessories