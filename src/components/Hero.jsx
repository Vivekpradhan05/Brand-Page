import "./Hero.css";

function Hero(){
    return(
        <main className="hero container">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
          <div className="hero-btn">
             <button className="red-btn">Shop now</button>
             <button>Category</button>
          </div>
          <p>also available on </p>
          <div className="storeLogo">
            <img src="/public/images/flipkart.png" alt="flipkart" />
            <img src="/public/images/amazon.png" alt="amazon" />
          </div>
            </div>

            <div className="heroImage">
                <img src="/public/images/hero-image.png" alt="" />
            </div>
        </main>
    );
}

export default Hero;