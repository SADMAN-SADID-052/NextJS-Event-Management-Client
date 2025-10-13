import React from "react";
import Bannar from "./components/Bannar";
import AboutUs from "./components/Aboutus";
import Meetteam from "./components/Meetteam";


export default function Home() {
  return (
<div className="bg-black">

    <Bannar></Bannar>
    <div className="max-w-6xl mx-auto">
    <AboutUs></AboutUs>
    <Meetteam></Meetteam>
    </div>
</div>



  );
}
