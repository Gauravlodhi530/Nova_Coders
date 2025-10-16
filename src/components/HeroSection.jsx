import React, { useMemo, Suspense } from "react";
import Button from "./ui/Button";

// Lazy-load heavier visual components to reduce initial bundle size
const Hyperspeed = React.lazy(() => import("./Hyperspeed"));
const KeyStats = React.lazy(() => import("./KeyStats"));

const HeroSection = () => {
  // ✅ useMemo ensures the effectOptions object is stable across re-renders
  const effectOptions = useMemo(
    () => ({
      onSpeedUp: () => {},
      onSlowDown: () => {},
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.03, 400 * 0.2],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
        sticks: 0x03b3c3,
      },
    }),
    []
  );

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-slate-950 overflow-hidden pt-20">
      {/* ✅ 3D Hyperspeed background */}
       {/* <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Hyperspeed effectOptions={effectOptions} />
        </Suspense>
      </div>  */}

      {/* ✅ Content Layer */}
      <div className="relative z-10 px-6">
        <p className="font-sharetech text-xl md:text-2xl text-gray-400 mb-2">
          Empowering Minds. Building Futures.
        </p>

        <h1 className="font-bitcount text-4xl md:text-6xl font-bold bg-gradient-to-b from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          Empowering the Next Generation of Innovators and Tech Leaders
        </h1>

        <p className="font-roboto mt-6 text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Nova Coders is a vibrant student-driven tech community in Aligarh
          dedicated to shaping future innovators. We empower learners to explore
          cutting-edge technologies.
        </p>

        {/* ✅ Call-to-Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="justify-center"
            variant="secondary"
            onClick={() => alert("Join the Community clicked!")}
          >
            Join the Community <span className="text-2xl">&#8594;</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => alert("Explore Opportunities clicked!")}
          >
            Explore Opportunities
          </Button>
        </div>

        {/* ✅ Key Stats Component */}
        <div className="mt-10">
          <Suspense fallback={<div className="h-24" />}> 
            <KeyStats />
            
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
