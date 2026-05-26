import { useParams } from "react-router-dom"
import { players } from "../data/players.js"

export default function Player() {
  const { id } = useParams()

  const player = players.find((p) => p.id === id)

  if (!player) {
    return (
      <div
        style={{
          background: "#090909",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial"
        }}
      >
        <h1>Player not found</h1>
      </div>
    )
  }

  return (
    <div
      style={{
        background: "#090909",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "50px"
      }}
    >
      <div
        style={{
          background: "#141414",
          border: "1px solid #222",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "850px",
          margin: "0 auto",
          boxShadow: "0 0 25px rgba(0,0,0,0.4)"
        }}
      >
        <div
          style={{
            color: "#666",
            marginBottom: "10px",
            fontSize: "14px"
          }}
        >
          Competitive Player Profile
        </div>

        <h1
          style={{
            fontSize: "60px",
            margin: 0
          }}
        >
          {player.name}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "20px",
            flexWrap: "wrap"
          }}
        >
          {player.tiers.map((tier, i) => (
            <div
              key={i}
              style={{
                background: "#202020",
                padding: "8px 14px",
                borderRadius: "12px",
                color: "#ddd",
                fontSize: "14px"
              }}
            >
              {tier}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          <div
            style={{
              background: "#101010",
              border: "1px solid #222",
              borderRadius: "18px",
              padding: "25px"
            }}
          >
            <div style={{ color: "#777", marginBottom: "10px" }}>
              Region
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold"
              }}
            >
              {player.region}
            </div>
          </div>

          <div
            style={{
              background: "#101010",
              border: "1px solid #222",
              borderRadius: "18px",
              padding: "25px"
            }}
          >
            <div style={{ color: "#777", marginBottom: "10px" }}>
              Ranking Points
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold"
              }}
            >
              {player.points}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
              }
