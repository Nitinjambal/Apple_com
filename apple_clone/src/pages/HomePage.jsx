import React from "react";
import styles from "./HomePage.module.css"
import { TfiApple } from "react-icons/tfi";
import {AiFillApple } from "react-icons/ai";
import video from "../videos/podvid.mp4"

function HomePage(){
    return(
       <div className={styles.Home}>
  <div className={styles.overlay}></div>
<video src={video} autoPlay loop muted />
  <div className={styles.div} >
 <h1> Introducing the <br /> all-new HomePod.</h1>
  </div>
         {/* <img src={require("../images/speaker.jpg")} style={{height:"320px",margin:"auto",width:"100%"}}/> */}
         
          <div className={styles.Cards}>  
              
              <h1>MacBook Pro</h1> 
              <h2>Supercharged by M2 Pro and M2 Max</h2>
             <h2>Available starting 1.24</h2>
             <span>Learn more  </span>
             <span>   Order now</span>
             <div>
             <img src={require("../images/laptop 2.jpg")} style={{height:"350px",margin:"auto",width:"100%"}}/>

             </div>
             </div>


             <div className={styles.Cards}>  
              
              <h1>Mac mini</h1> 
              <h2>Supercharged by M2 and M2 Pro</h2>
             <h2>Available starting 1.24</h2>
             <span>Learn more  </span>
             <span>   Order now</span>
             <div>
             <img src={require("../images/phonebox.jpg")} style={{height:"350px",margin:"auto",width:"100%"}}/>

             </div>
             </div>
             
 
{/* small cards */}
       <div className={styles.smlcards}>
         <div> 
            <h1>Creativity and <br /> community. <br /> Woven together.</h1>
            <h3>Explore the new Black Unity watch <br /> band and matching face. </h3>
            <img src={require("../images/watch img.jpg")} style={{height:"320px",margin:"auto"}}/>
         </div>

         <div>
           <h1>
           <TfiApple style={{margin:"auto"}}/>
            WATCH
            </h1>
            <h4>SERIES 8</h4>
            <h3>A healthy leap ahead</h3>
            <img src={require("../images/watch r img.jpg")} style={{height:"363px",margin:"auto"}}/>
         </div>

         <div>
         <h1>iPhone 14 Pro</h1>
            <h3>Pro. Beyond.</h3>
            <img src={require("../images/iphone img.jpg")} style={{height:"410px",margin:"auto"}}/>
         </div>

         <div id={styles.whiteCards}>
         <h1>iPhone 14</h1>
            <h3>Big and bigger.</h3>
            <img src={require("../images/white iphone.jpg")} style={{height:"410px",margin:"auto"}}/>
         </div>

         <div id={styles.redCard}>
         <h1>A gift for every wish.</h1>
            <h3>Find something for everyone <br /> this Lunar New Year.</h3>
            <h4>Shop the gift guide</h4>
            <img src={require("../images/red iphone 2.jpg")} style={{height:"360px",margin:"auto"}}/>
         </div>

         <div id={styles.whiteCards2} >
         <h1>
            <AiFillApple style={{margin:"auto"}}/>
            Card
            </h1>
            <h3>Get up to 3% Daily Cash back <br />with every purchase.</h3>
            <img src={require("../images/white card.jpg")} style={{height:"360px",margin:"auto"}}/>
         </div>


       </div>
         
{/* image slider */}
   
       


<div className={styles.footer}>
    <div>
      <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by <br />
       going to Settings General Software Update. Tap Download and Install. <br />
Available for qualifying applicants in the United States. <br />
Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. br
Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>

    <hr style={{border:"1px solid gray",width:"66%",margin:"auto",marginTop:"28px",}} />
    </div>

<div className={styles.outfooter}>
  <div> <p style={{color:"black"}}> Shop and Learn</p> 
   store <br />Mac <br />iPad <br />iPhone <br />Watch <br />AirPods <br />TV & Home <br />AirTag <br />Accessiors <br />Gift Cards</div>
  <div><p style={{color:"black"}}>Services</p>
    Apple Music <br />Apple TV+ <br />Apple Fitness+ <br />Apple News+ <br />Apple Arcade <br />iCloud <br />Apple One <br />Apple Card <br />Apple Books <br />Apple Podcasts <br />App Store
    <p style={{color:"black",marginTop:"15px"}}>Account</p>
    Manage Your Apple ID <br />Apple Store Account <br />ICloud.com
  </div>

  <div><p style={{color:"black"}}>Apple Store</p>
    Find a Store <br />Genius Bar <br />Today at Apple <br />Apple Camp <br />Apple Store App <br />Refurbished <br />Financing <br />Apple Trade in <br />Order Status <br />Shopping Help
  </div>

  <div><p style={{color:"black"}}>For Business</p>
     Apple and Business <br />Shop for Business
     <p style={{color:"black",marginTop:"15px"}}>For Education</p>
      Apple and Education <br />Shop for K-12 <br />Shop for College 
      <p style={{color:"black",marginTop:"15px"}}>For Healthcare</p>
      Apple and Hearlthcare <br />Health on Watch <br />Health Records
      <p style={{color:"black",marginTop:"15px"}}>For Government</p>
      Shop for Government <br />Shop for Military

  </div>

  <div><p style={{color:"black"}}>Apple Values</p>
   Accessibility <br />Accessibility <br />Education <br />Environment <br />Inclusion and Diversity <br />Privacy <br />Racial Equity and Justice <br />Supplier Responsibility
   <p style={{color:"black",marginTop:"15px"}}>About Apple</p>
   Newsroom <br />Apple Leadership <br />Career Opprortunities <br />Investors <br />Ethics & Compliance <br />Events <br />Contact Apple
  </div>

</div>

</div>




 </div>       
    )
}
export default HomePage;