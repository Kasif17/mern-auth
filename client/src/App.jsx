import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SignIn from "./Pages/Signin"
import SingUp from "./Pages/SingUp"
import Profile from "./Pages/Profile"

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sing-in" element={<SignIn/>} />
      <Route path="/sing-up" element={<SingUp/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </BrowserRouter>
}

