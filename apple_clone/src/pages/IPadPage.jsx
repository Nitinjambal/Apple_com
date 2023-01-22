



import React from 'react'
import iPadVideo from "../videos/ipad.mp4"
import styles from "./IpadPage.module.css";
import iPad2Video from "../videos/ipod2.mp4"


function IPadPage() {
  return (
    <div className={styles.iPadPage}>
        <div className={styles.newOverlay}></div>
  <video  src={iPadVideo} autoPlay loop muted/>
  <div className={styles.newDiv} >
 {/* <h1> iPad Pro </h1>
 <p> Supercharged by.</p> */}
  {/* <img src="https://www.apple.com/v/ipad-pro/al/images/overview/hero/m2_logo__90ungfqgnsiu_large.png" alt="" /> */}

 </div>
  
   
   <div className={styles.heading}>
    {/* <h1>M2 chip. <br />
Next-generation <br /> performance.</h1> */}
   <img className={styles.image} src="https://www.apple.com/v/ipad-pro/al/images/overview/chip/performance_hero__cxya4f2p5euu_large.jpg" alt="" />
    
    <h2>
    M2 chip. The M2 chip is the next generation of Apple silicon, with an 8‑core CPU that delivers up to 15 percent faster performance and a 10‑core GPU that provides up to 35 percent faster graphics performance.1 With a 40 percent faster Neural Engine to accelerate machine learning tasks and 50 percent more memory bandwidth, M2 brings astonishing performance and new capabilities to iPad Pro. So you can create photorealistic 3D designs, build intricate AR models, and play games with console‑quality graphics at high frame rates faster than ever. All while enjoying all‑day battery life.2
    </h2>
    <img className={styles.image} src="https://www.apple.com/v/ipad-pro/al/images/overview/chip/m2_end_state__d1wjtfymwb8m_large.jpg" alt="" />

    </div>

    <div className={styles.secimage}>
      <div>
       <h1>
       11” <br />
Liquid Retina display. <br />
Pixel‑perfect portability.
       </h1>
       </div>
       <div> 
        <video src={iPad2Video} loop autoPlay muted></video>
       </div>

         <div>
          <img src="https://www.apple.com/v/ipad-pro/al/images/overview/ipados/thunderbolt_hero__bn4yb1ktt4dy_large.jpg" alt="" />
         </div>
    </div>



    <div className={styles.finImage}>
    <div>
       <h1>
       Cameras. <br />
Capture and connect. <br />
On a deeper level.
       </h1>
       </div>
         <div>
          <img src="https://www.apple.com/v/ipad-pro/al/images/overview/cameras/cameras_hero__e7hs1y0q396q_large.jpg" alt="" />
         </div>
    </div>



{/* footer */}


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
  <div> <p> Shop and Learn</p> 
   store <br />Mac <br />iPad <br />iPhone <br />Watch <br />AirPods <br />TV & Home <br />AirTag <br />Accessiors <br />Gift Cards</div>
  <div><p>Services</p>
    Apple Music <br />Apple TV+ <br />Apple Fitness+ <br />Apple News+ <br />Apple Arcade <br />iCloud <br />Apple One <br />Apple Card <br />Apple Books <br />Apple Podcasts <br />App Store
    <p style={{color:"black",marginTop:"15px"}}>Account</p>
    Manage Your Apple ID <br />Apple Store Account <br />ICloud.com
  </div>

  <div><p>Apple Store</p>
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

export default IPadPage