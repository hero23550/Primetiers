import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Rankings from "./pages/Rankings.jsx"
import Player from "./pages/Player.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  )
}
