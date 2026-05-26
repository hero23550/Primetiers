import { players } from "../data/players"
import { Link } from "react-router-dom"

export default function Rankings() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Overall Rankings</h1>

      {players
        .sort((a, b) => b.points - a.points)
        .map((p, i) => (
          <div key={p.id} style={{
            background: "#f2f2f2",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px"
          }}>
            <h2>#{i + 1} {p.name}</h2>
            <p>{p.points} pts</p>
            <Link to={`/player/${p.id}`}>View Profile</Link>
          </div>
        ))}
    </div>
  )
      }
