import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Inter, Arial",
        overflowX: "hidden"
      }}
    >
      {/* GLOW BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(80,80,255,0.18)",
          filter: "blur(120px)",
          zIndex: 0
        }}
      />

      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(5,5,5,0.75)",
          borderBottom: "1px solid #161616",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 20px",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            letterSpacing: "-1px"
          }}
        >
          PrimeTiers
        </h2>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap"
          }}
        >
          <Link
            to="/"
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: "15px"
            }}
          >
            Home
          </Link>

          <Link
            to="/rankings"
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: "15px"
            }}
          >
            Rankings
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "90px 20px 40px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            border: "1px solid #222",
            background: "#0d0d0d",
            borderRadius: "999px",
            color: "#888",
            marginBottom: "25px",
            fontSize: "13px"
          }}
        >
          Competitive Ranking Platform
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 12vw, 110px)",
            lineHeight: "0.95",
            margin: 0,
            fontWeight: "900",
            letterSpacing: "-3px"
          }}
        >
          Dominate The Competitive Meta
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "28px auto",
            color: "#777",
            fontSize: "17px",
            lineHeight: "1.7"
          }}
        >
          Explore global rankings, elite players, competitive regions,
          and advanced tier analytics.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "35px"
          }}
        >
          <Link
            to="/rankings"
            style={{
              background: "white",
              color: "black",
              padding: "15px 24px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
              minWidth: "170px"
            }}
          >
            Explore Rankings
          </Link>

          <button
            style={{
              background: "#101010",
              border: "1px solid #222",
              color: "white",
              padding: "15px 24px",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "15px",
              minWidth: "170px"
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "50px 20px 100px"
        }}
      >
        {[
          {
            title: "Global Rankings",
            text: "Track elite players across multiple regions."
          },
          {
            title: "Tier Lists",
            text: "Dynamic competitive rankings and performance tiers."
          },
          {
            title: "Region Analytics",
            text: "Compare competitive ecosystems worldwide."
          },
          {
            title: "Player Profiles",
            text: "Detailed stats and ranking progression."
          }
        ].map((card, index) => (
          <div
            key={index}
            style={{
              background: "rgba(15,15,15,0.95)",
              border: "1px solid #1d1d1d",
              borderRadius: "24px",
              padding: "28px",
              backdropFilter: "blur(12px)"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg,#fff,#666)",
                marginBottom: "22px"
              }}
            />

            <h2
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "24px"
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#777",
                lineHeight: "1.7",
                fontSize: "15px"
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid #161616",
          padding: "30px 20px",
          textAlign: "center",
          color: "#666",
          fontSize: "14px"
        }}
      >
        © 2026 PrimeTiers
      </div>
    </div>
  )
            }
