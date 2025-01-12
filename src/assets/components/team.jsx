import jsonData from './Random-images.json';
import { useState, useEffect } from 'react';
import Navbar from './header';

import Card from './card';
// import Header from "./header"

import Footer from './footer';
function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Log the data to verify it is being loaded correctly
    console.log(jsonData);
    setData(jsonData); // Ensure jsonData matches the expected structure
  }, []);
  const array = [{
    "name": "John Doe",
    "image": "https://unsplash.it/200/200",
    "job": "Software Engineer"
  },
 ]
  
    return (
      <>
      <Navbar />
       <div className="background background1"></div>
       {/* <div className="background background2"></div>
       <div className="width678">
       <div className="background background2" style={{ marginTop: '200%' }}></div>
       <div className="background background2" style={{ marginTop: '300%' }}></div>
       </div> */}
       
       {/* <div className="background background3"></div> */}
       <div  className="card-containers">
                     <h1 >         Advisory   </h1>
        <div className="container">

      <Card ajay={"Ajay Kumar Saini"} description={"I am Happy "}/>
      {array.map((array)=>(
      <Card ajay={array.name} img={array.image} description={array.job}></Card>
      ))}


      </div>
      </div>
       <div  className="card-containers">
                     <h1 >        Team   </h1>
        <div className="container">
        {data.map((name, index) => (

        <Card  ajay={name.name} description={name.description} img={name['image-url']} key={index} />
        
      ))}
</div>

      </div>
      
    <Footer />
      </>
     
    );
  }
  

  export default Team;