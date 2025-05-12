
"use client"
import React, {useState} from "react";

// import Carousel from "./_components/Carousel";
// import About from "./_components/about/AboutCard";
// import Top from "./_components/Top";
// import TopWrapper from "./_components/TopWrapper";
// import Pricing from "./Pricing";
// import Footer from "./_components/primary/Footer";
// import Client from "./_components/clients/Client";   
// import Funnel from "./popup/Funnel";
// import PartnerSlider from "./_components/partners/PartnerSlider";
// import { Download, ArrowRight } from "lucide-react";
// import Banner from './_components/HomeBanner/Banner'; 

const Landing = () => {
 // Banner state variables
  const [gradientColor] = useState("#4facfe");
  const [bannerText] = useState("Welcome to our new page!");
  const [subText] = useState("Explore more!");
  const [buttonStyle] = useState({
    backgroundColor: "white",
    color: "#2563eb",
  });
  const [buttonText] = useState("Learn More");
  const [buttonLink] = useState("https://example.com");
  const [borderWidth] = useState(0.5);
  const [marginColor] = useState("#000000");
  const [backgroundImage] = useState("/banner/wave.jpg");
  const [shareMessage] = useState("Check this out!");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [textAlign] = useState("center");


  return (
    <div>
      
     
    </div>
  );
};

export default Landing;

