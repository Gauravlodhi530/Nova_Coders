import React, { Suspense } from 'react';
const Footer = React.lazy(() => import("./components/Footer"));
const Nav = React.lazy(() => import("./components/Nav"));
import MainRoutes from "./routes/MainRoutes";
import LoadingScreen from './components/ui/LoadingScreen';

const App = () => {
  return (
    <div className="min-h-screen  text-gray-100 bg-gradient-to-br from-[#030712] via-[#0c1329] to-[#232a46] relative ">
      {/* <div className="relative h-screen w-[100%] bg-[#030713] ">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-0%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] overflow-hidden"></div> */}
      <Suspense fallback={<div className="p-4 text-center"> <LoadingScreen /></div>}>
        <Nav />
        <MainRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
