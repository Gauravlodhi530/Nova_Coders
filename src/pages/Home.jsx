import React from "react";
import HeroSection from "../components/HeroSection";
import Events from "./Events";
import ServicesSection from "../components/ServiceSection";
import MissionVision from "../components/MissionVision";
import { Carousel_003, Skiper49 } from "../components/ui/Skiper49";
import Partners from "../components/Partners";
import ContactFormSection from "../components/ContactFormSection";
import JoinNow from "../components/JoinNow";
const Home = () => {
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww",
      alt: "Photo 1",
    },
    {
      src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww",
      alt: "Photo 1",
    },
    {
      src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww",
      alt: "Photo 1",
    },
    {
      src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww",
      alt: "Photo 1",
    },
    {
      src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Photo 2",
    },
  ];

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <MissionVision />
      <div className="">
        <Carousel_003
          className={""}
          images={images}
          showPagination
          showNavigation
          autoplay
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        />
      </div>
      <Partners/>
      <ContactFormSection />
      <JoinNow />
    </div>
  );
};

export default Home;
