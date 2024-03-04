// Navigation.jsx
import React, { useRef, useState } from "react";
import gsap from "gsap";
import "./Navigation.css";
import Images from "../../constants/Images";

const Navigation = () => {
  const cardRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const tl = useRef(gsap.timeline({ defaults: { ease: "power2.inOut" } })).current;

  const handleToggle = () => {
    // tl.clear(); // Clear any existing animations

    tl.to('.activator', {
      background: isToggled ? 'transparent' : '#DEABC2',
      borderRadius: '5em 0 0 5em',
    });
    tl.to('nav', {
      clipPath: isToggled ? 'ellipse(0% 100% at 50% 50%)' : 'ellipse(100% 100% at 50% 50%)',
    }, "-=.5");
    tl.to('nav img', {
      opacity: isToggled ? 0 : 1,
    //   transform: isToggled ? 'translateX(10px)' : 'translateX(0)',
      stagger: isToggled ? 0 : 0.05,
    }, "-=.5");

    setIsToggled(!isToggled);
  };

  return (
    <header>
      <img
        className={`activator ${isToggled ? 'active' : ''}`}
        id="activator"
        ref={cardRef}
        src={Images.Menu}
        alt="Menu"
        onClick={handleToggle}
      />
      <nav>
        <ul>
          <li><a href="/"><img src={Images.Home} alt="Home"/></a></li>
          <li><a href="/About"><img src={Images.About} alt="About"/></a></li>
          <li><a href="/Projects"><img src={Images.Projects} alt="Projects"/></a></li>
          <li><a href="/Skills"><img src={Images.Skills} alt="Skills"/></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
