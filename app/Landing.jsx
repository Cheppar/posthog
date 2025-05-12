
"use client"
import React, {useState} from "react";
import DomesticPage from "./_components/domestic/Domestic";
import Socials from "./_components/socials/SocialStrip";


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
      <DomesticPage />
    
    </div>
  );
};

export default Landing;

