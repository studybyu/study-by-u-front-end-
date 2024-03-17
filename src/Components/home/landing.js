import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Landing() {
  // State for countdown timer
  const [countDown, setCountDown] = useState(12 * 24 * 60 * 60 * 1000); // 12 days in milliseconds

  // Update the countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds into days, hours, minutes, and seconds
  const seconds = Math.floor((countDown / 1000) % 60);
  const minutes = Math.floor((countDown / 1000 / 60) % 60);
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  // Background style
  const backgroundStyle = {
    height: "80vh",
    backgroundImage: "url('/your-image-path.jpg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={backgroundStyle}>
      <h1>Coming Soon</h1>
      <h2>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h2>
    </div>
  );
}

export default Landing;
