import AuthPage from '../pages/AuthPage';
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Team = React.lazy(() => import('../pages/Team'));
const ScrollStackDemo = React.lazy(() => import('../pages/ScrollStackDemo'));
const Services = React.lazy(() => import('../pages/Services'));
const Login = React.lazy(() => import('../pages/Login'));
const Signup = React.lazy(() => import('../components/Signup'));

const MainRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= '/about' element={<About/>}/>
            <Route path= '/team' element={<Team/>}/>
            <Route path= '/stack-demo' element={<ScrollStackDemo/>}/>
            <Route path= '/services' element={<Services/>}/>
            <Route path= '/login' element={<Login/>}/>
            <Route path= '/register' element={<Signup/>}/>
            <Route path= '/signup' element={<AuthPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default MainRoutes
