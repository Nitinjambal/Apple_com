import React from 'react'
import styles from "./Accessories.module.css"
import vidWave from "../videos/speakerWave.mp4"
import { FaSistrix } from "react-icons/fa";
import {ChevronDownIcon,SearchIcon} from "@chakra-ui/icons"
import { Card, CardHeader, CardBody, CardFooter,Image,Heading,Stack,Text } from '@chakra-ui/react'
import Responsive from '../Components/Responsive';
import { useParams, Link as RouterLink } from 'react-router-dom';

const details=[
  {id:1,
  images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2?wid=532&hei=582&fmt=png-alpha&.v=1672297329482",
  p:"Only at Apple",
  h3:"OtterBox Lumen Series iPhone 14",
  price:"$49.95"
},
{id:2,
images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPL83?wid=266&hei=291&fmt=png-alpha&.v=1660798745418",
p:"New",
h3:"41 mm Red Spot Light",
price:"$49.00"
},

{id:3,
images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLWJ3?wid=266&hei=291&fmt=png-alpha&.v=1630029877000",
p:"Only at Apple",
h3:"OtterBox Lumen Series iPhone 14",
price:"$49.95"
},

{id:4,
images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=266&hei=291&fmt=png-alpha&.v=1604022365000",
p:"Free Engraving",
h3:"AirPods Max-Pink",
price:"$549.95"
},

{id:5,
  images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE42?wid=266&hei=291&fmt=png-alpha&.v=1646973689020",
  p:"Smart Home Accessories",
  h3:"Nanoleaf Shapes Hexagons",
  price:"$199.00"
  },

  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWM3?wid=266&hei=291&fmt=png-alpha&.v=1652736144126",
    p:"Only at Apple",
    h3:"35 Dual USB-C Port Compact Power Adapter",
    price:"$49.00"
    }

];

const details2=[
  {id:1,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63?wid=266&hei=291&fmt=png-alpha&.v=1661471392701",
    p:"New",
    h3:"iPhone 14 Clear Case with MagSafe",
    price:"$49.00"
  },
  {id:2,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=266&hei=291&fmt=png-alpha&.v=1661269793559",
    p:"Charger",
    h3:"MagSafe Charger",
    price:"$39.00"
  },
  {id:3,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ512?wid=266&hei=291&fmt=png-alpha&.v=1662764942928",
    p:"New",
    h3:"OtterBox Figura Case for iphone-14",
    price:"$30.00"
  },
  {id:4,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXF3?wid=266&hei=291&fmt=png-alpha&.v=1602179308000",
    p:"New",
    h3:"MagSafe Duo Charger",
    price:"$129.00"
  },
  {id:5,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPT3?wid=266&hei=291&fmt=png-alpha&.v=1663108575695",
    p:"New",
    h3:"iphone Leather Wallet green",
    price:"$59.00"
  },
  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPRY3?wid=266&hei=291&fmt=png-alpha&.v=1666123999266",
    p:"New",
    h3:"iPhone 14 Silicone Clear Case with MagSafe",
    price:"$49.00"
  },
]

const details3=[
  {id:1,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3_FV401?wid=266&hei=291&fmt=png-alpha&.v=1664481416885",
    p:"New",
    h3:"Magic Keyboard Folio iPad",
    price:"$249.00"
  },
  {id:2,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=266&hei=291&fmt=png-alpha&.v=1564075356758",
    p:"New",
    h3:"Apple Pencil (1st generation)",
    price:"$99.00"
  },
  {id:3,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQK3?wid=266&hei=291&fmt=png-alpha&.v=1665496505001",
    p:"New",
    h3:"Magic Keyboard for iPad Pro 12.9-inch",
    price:"$349.00"
  },
  {id:4,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=266&hei=291&fmt=png-alpha&.v=1664481896795",
    p:"New",
    h3:"Smart Folio for iPad",
    price:"$79.00"
  },
  {id:5,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQLU3?wid=266&hei=291&fmt=png-alpha&.v=1666191613710",
    p:"New",
    h3:"USB-C to Apple Pencil Adapter",
    price:"$9.00"
  },
  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43?wid=266&hei=291&fmt=png-alpha&.v=1645642300320",
    p:"New",
    h3:"Smart Folio for iPad Air",
    price:"$79.00"
  },
]

const details4=[
  {id:1,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLQ3ref?wid=266&hei=291&fmt=png-alpha&.v=1660695336711",
    p:"New",
    h3:"Starlight sport Band",
    price:"$49.00"
  },
  {id:2,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3?wid=266&hei=291&fmt=png-alpha&.v=1660799010979",
    p:"New",
    h3:"Elderberry Sport Loop",
    price:"$49.00"
  },
  {id:3,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML773?wid=266&hei=291&fmt=png-alpha&.v=1630015271000",
    p:"New",
    h3:"Graphite Milanese Loop",
    price:"$99.00"
  },
  {id:4,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGM3ref?wid=266&hei=291&fmt=png-alpha&.v=1660861593465",
    p:"New",
    h3:"Rainforest Brand Solo Loop",
    price:"$99.00"
  },
  {id:5,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPH73ref?wid=266&hei=291&fmt=png-alpha&.v=1660613104271",
    p:"New",
    h3:"Olive Gray/Black Nike Sport Band",
    price:"$49.00"
  },
  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MP8G3ref?wid=266&hei=291&fmt=png-alpha&.v=1660863651356",
    p:"New",
    h3:"Azure Modern Buckle",
    price:"$149.00"
  },

]

const details5=[
  {id:1,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=266&hei=291&fmt=png-alpha&.v=1646446502337",
    p:"New",
    h3:"Studio Display",
    price:"$1,549.00"
  },
  {id:2,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=266&hei=291&fmt=png-alpha&.v=1645719947833",
    p:"New",
    h3:"Magic Keyboard with Touch ID",
    price:"$199.00"
  },
  {id:3,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=266&hei=291&fmt=png-alpha&.v=1645138486301",
    p:"New",
    h3:"Magic Mouse",
    price:"$99.00"
  },
  {id:4,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=266&hei=291&fmt=png-alpha&.v=1645136899926",
    p:"New",
    h3:"Magic Trackpad",
    price:"$149.00"
  },
  {id:5,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK122?wid=266&hei=291&fmt=png-alpha&.v=1593112648000",
    p:"New",
    h3:"Power Adapter Extension Cable",
    price:"$19.00"
  },
  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUF82?wid=266&hei=291&fmt=png-alpha&.v=1590526633000",
    p:"New",
    h3:"USB-C Digital AV Multiport Adapter",
    price:"$69.00"
  },
]

const details6=[
  {id:1,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=266&hei=291&fmt=png-alpha&.v=1660803972361",
    p:"New",
    h3:"AirPods Pro",
    price:"$249.00"
  },
  {id:2,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=266&hei=291&fmt=png-alpha&.v=1670557210097",
    p:"New",
    h3:"HomePod-Midnight",
    price:"$299.00"
  },
  {id:3,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110?wid=266&hei=291&fmt=png-alpha&.v=1632925511000",
    p:"New",
    h3:"HomePod mini-Blue",
    price:"$99.00"
  },
  {id:4,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83?wid=266&hei=291&fmt=png-alpha&.v=1647541360014",
    p:"New",
    h3:"Beast Studio Pink",
    price:"$149.00"
  },
  {id:5,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMG2?wid=266&hei=291&fmt=png-alpha&.v=1601053195000",
    p:"New",
    h3:"Beast Flex Blue",
    price:"$69.00"
  },
  {id:6,
    images:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJ92?wid=266&hei=291&fmt=png-alpha&.v=1580420175341",
    p:"New",
    h3:"Beast studio 3 Wireless Shadow Gray",
    price:"$349.00"
  }
]


function Accessories() {
  const handleClick=()=>{
    console.log("working");
    <RouterLink to={`/products/${details6.id}`} />
  } 

  return (
    <div className={styles.Container} >
 

    <div className={styles.nav}>
       <h2>Accessories</h2>
       <span>Browse all <ChevronDownIcon/> </span>
      </div>

{/* video section */}
     {/* <div>
        <video src={vidWave} autoPlay loop muted></video>
      </div> */}
      
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
       
           <div className={styles.productsDiv} onClick={handleClick}>
          
              <div>
                  <h1>Featured Lunar New Year Accessories</h1>
              </div>
          <div>
             <Responsive details={details}/> 
          </div>

         <div>
             <h1>Featured iPhone Accessories</h1>
             <Responsive details={details2}/> 
         </div>

         <div>
             <h1>Featured iPad Accessories</h1>
             <Responsive details={details3}/> 
         </div>

         <div>
             <h1>Apple Watch Bands</h1>
             <Responsive details={details4}/> 
         </div>

         <div>
             <h1>Featured Mac Accessories</h1>
             <Responsive details={details5}/> 
         </div>

         <div>
             <h1>Sound Essentials</h1>
             <Responsive details={details6}/> 
         </div>

         {/* <div>
             <h1>Products from different Companies</h1>
             <Responsive object={<ApiProducts/>}/> 
         </div> */}
        
           </div>
           



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

export default Accessories