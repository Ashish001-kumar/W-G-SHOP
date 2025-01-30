import React from 'react';
import './Home.css';
import slides from './image/slide1.png';
import Categories from './image/brand.jpg';
import Categories1 from './image/website.jpg';
import Categories2 from './image/graphic.jpg';
import Categories3 from './image/webpage.jpg';
import about from './image/about.png';
import websiteImg from './image/hero.png'




const Home = () => {
    return (
      <>
      <div className="hero">
           <div className="slider">
              <div className="slide_img">
                <img src={slides} alt="" />
              </div>
              <div className="slide_text">
                 <h1 className="hero_head">Grow with <br></br>great Website</h1>
                 <p className='hero_paragraph'>Logos, websites, packaging design and more. Our trusted designer community has helped thousands of businesses launch, grow, expand and rebrand with custom, professional design.</p>
                 <a href="/" className='bay'> Bay Now </a>
              </div>
           </div>
      </div>
      <div className="temp"> 
           <a href="/" className='all'> View All Design Categories ------------ </a>        
          <div className="temp_box">
               <div className="temp_link">                
                <img src={Categories1} alt="" />
                <h3>Website Design</h3>
                </div>
               <div className="temp_link">                
                <img src={Categories2} alt="" />
                <h3>Graphic Design</h3>
                </div>
               <div className="temp_link">                
                <img src={Categories3} alt="" />
                <h3>Webpage Template</h3>
                </div>
               <div className="temp_link">                
                <img src={Categories} alt="" />
                <h3>Logo Design</h3>
                </div>
          </div>
      </div>


      <div className="about">
        <div className="about_link">
          <img src={about} alt="" />
          <div className="about_link_text">
              <h2>How to Make Your Brand Stand Out from Competitors ?</h2>
                <ul>
                  <li>
                    <p>Eye Catching Websites</p>
                    </li>
                  <li>
                    <p>Most Popular Website Mockup</p>
                  </li>
                  <li>
                    <p>Creative Logo Maker</p>
                  </li>
                  <li>
                    <p>Creative Graphic for Web and Social Media Post</p>
                  </li>
                </ul> 
                <p className='sub-paragraph'>Feel confident working with our designer community. All our designers are vetted creative experts who've worked with hundreds of businesses to bring their designs to life.</p>   

                <a href="/" className='bays'> Bay Now </a>          
          </div>
          </div>
      </div>


      <div className="website">
        <img src={websiteImg} alt="" />
        <div className="web_text">
          <h3 className='web-headline'>WebPage Mockup & Coded for <br></br> <span>any screen size</span></h3>
          <p> Built with all top-notch technologies, this website is fully responsive, and the clean codebase helps it to stay intact without breaking down the layout around any device or screen size or web browser. </p>
        </div>
      </div>


      <div className="how_bay">
        <div className="bay_text">
           <h1 className="bay_headline">What services do we provide  <br></br> <span>& how can our services help you?</span></h1>              
           <li> We provide Best website design and graphic design and logo design</li> 
           <li>First choose the design and contact with us...</li>
                 
        </div>
      </div>

      <div className="footer">
      <div className="info">
        <ul>
          <h3>Info</h3>
          <li><a href="/">Hme</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contacts</a></li>
        </ul>
      </div>
      <div className="info"></div>
      <div className="info"></div>
      </div>

      </>
    );
}

export default Home;
