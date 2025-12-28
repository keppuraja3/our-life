"use client";
import { useState } from "react";
import DomeGallery from "./gallery/DomeGallery";
import LoveTextLoader from "./loader/LoveTextLoader";

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);

  setTimeout(() => {
    setPageLoading(false);
  }, 5000);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {pageLoading ? (
        // <LoveTextLoader
        //   text="For my love..."
        //   disabled={false}
        //   speed={3}
        //   className="custom-class"
        // />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <img
            src="/images/my_love_33.png"
            alt="For my love"
            style={{ objectFit: "contain" }}
          />
        </div>
      ) : (
        <DomeGallery />
      )}
    </div>
  );
}
