// This directive indicates that the compo
"use client";
// Importing React hooks for state and side effects
import { useState, useEffect } from "react";

export default function AdBanner({ type = "default" }) {
  // Define ad images for each category
  const getAdImages = () => {
    switch (type) {
      case "home":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "search":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "national":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "international":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "politics":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "sports":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "technology":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "entertainment":
        return ["/ads/ad1.png", "/ads/ad2.png"];
      case "finance":
        return ["/ads/ad1.png", "/ads/ad2.png"];
        // Return the same set of ad images for all categories.
      default:
        // Default ad images if no category matches.
        return ["/ads/ad1.png", "/ads/ad2.png"];
    }
  };
 // Get the ad images based on the type prop.
  const adImages = getAdImages();
  const [currentIndex, setCurrentIndex] = useState(0);// State to track the current ad image index.
  const [fade, setFade] = useState(true);

  // Auto-rotate images with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
        setFade(true); // Fade in the new image
      }, 500); // Wait 500ms before  before changing image
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [adImages.length]);// Dependency array includes adImages.length to reset the interval if the images change.

  return (
    <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden mt-16">
      <img
        src={adImages[currentIndex]}
        alt="Ad Banner"
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`} // Apply fade effect based on the fade state.
      />
    </div>
  );
}
