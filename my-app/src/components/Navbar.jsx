import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      padding: "15px",
      background: "#0f0f0f",
      color: "white"
    }}>
      <h3>PrimeTiers</h3>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/rankings" style={{ color: "white" }}>Rankings</Link>
    </div>
  )
}
