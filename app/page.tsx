"use client"
import { useState } from "react";
import DomeGallery from "./gallery/DomeGallery";
import LoveTextLoader from "./loader/LoveTextLoader";

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);

  setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {pageLoading ? (
        <LoveTextLoader
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      ) : (
        <DomeGallery />
      )}
    </div>
  );
}
