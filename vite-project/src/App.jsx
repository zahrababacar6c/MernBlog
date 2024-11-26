import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/signin"
import Signup from "./pages/Signup"
import Project from "./pages/Project"
import About from "./pages/about"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/About" element= {<About />} />
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/signin" element= {<Signin />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/project" element= {<Project />} />
      </Routes>
    </BrowserRouter>
  )
}
