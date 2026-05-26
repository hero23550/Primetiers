import { useEffect, useState } from "react"
import { players } from "../data/players.js"

export default function Rankings() {
  const [loading, setLoading] = useState(true)
  const [region, setRegion] = useState("ALL")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div style={{
        background: "#090909",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial"
      }}>
        <div style={{
          width: "55px",
          height: "55px",
          border: "5px solid #222",
          borderTop: "5px solid white",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />

        <p style={{ marginTop: "20px", color: "#999" }}>
          Loading rankings...
        </p>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    )
  }

  const filtered =
    region === "ALL"
      ? players
      : players.filter((p) => p.region === region)

  const sorted = [...filtered].sort((a, b) => b.points - a.points)

  return (
    <div style={{
      background: "#0b0b0b",
      minHeight: "100vh",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{
        fontSize: "46px",
        marginBottom: "10px"
      }}>
        Overall Rankings
      </h1>

      <p style={{
        color: "#888",
        marginBottom: "30px"
      }}>
        Competitive player leaderboard
      </p>

      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "30px",
        flexWrap: "wrap"
      }}>
        {["ALL", "NA", "EU", "ASIA"].map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            style={{
              background: region === r ? "white" : "#1b1b1b",
              color: region === r ? "black" : "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {r}
          </button>
        ))}
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px"
      }}>
        {sorted.map((player, index) => (
          <div
            key={player.id}
            style={{
              background: "#151515",
              border: "1px solid #222",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "0.2s",
              boxShadow: "0 0 18px rgba(0,0,0,0.35)"
            }}
          >
            <div>
              <div style={{
                color: "#666",
                marginBottom: "8px",
                fontSize: "14px"
              }}>
                Rank #{index + 1}
              </div>

              <h2 style={{
                margin: 0,
                fontSize: "30px"
              }}>
                {player.name}
              </h2>

              <div style={{
                display: "flex",
                gap: "10px",
                marginTop: "12px",
                flexWrap: "wrap"
              }}>
                {player.tiers.map((tier, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#232323",
                      padding: "6px 12px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      color: "#ddd"
                    }}
                  >
                    {tier}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{
                color: "#777",
                fontSize: "14px"
              }}>
                Region
              </div>

              <div style={{
                marginBottom: "10px",
                fontWeight: "bold"
              }}>
                {player.region}
              </div>

              <div style={{
                color: "#777",
                fontSize: "14px"
              }}>
                Points
              </div>

              <div style={{
                fontSize: "34px",
                fontWeight: "bold"
              }}>
                {player.points}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
      }
