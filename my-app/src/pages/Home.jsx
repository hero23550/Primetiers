import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top, #1b1b1b 0%, #090909 60%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        overflow: "hidden"
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 50px",
          borderBottom: "1px solid #1f1f1f",
          backdropFilter: "blur(10px)"
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: "bold"
          }}
        >
          PrimeTiers
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center"
          }}
        >
          <Link
            to="/"
            style={{
              color: "#ccc",
              textDecoration: "none"
            }}
          >
            Home
          </Link>

          <Link
            to="/rankings"
            style={{
              color: "#ccc",
              textDecoration: "none"
            }}
          >
            Rankings
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "120px",
          paddingLeft: "20px",
          paddingRight: "20px"
        }}
      >
        <div
          style={{
            background: "#161616",
            border: "1px solid #242424",
            padding: "8px 18px",
            borderRadius: "999px",
            color: "#aaa",
            fontSize: "14px",
            marginBottom: "25px"
          }}
        >
          Competitive Rankings Platform
        </div>

        <h1
          style={{
            fontSize: "82px",
            maxWidth: "1000px",
            lineHeight: "1",
            margin: 0,
            fontWeight: "900",
            letterSpacing: "-3px"
          }}
        >
          The Ultimate Competitive Ranking Hub
        </h1>

        <p
          style={{
            color: "#888",
            maxWidth: "700px",
            fontSize: "20px",
            marginTop: "30px",
            lineHeight: "1.6"
          }}
        >
          Track players, compare tiers, dominate rankings, and explore
          competitive performance across every region.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Link
            to="/rankings"
            style={{
              background: "white",
              color: "black",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            Explore Rankings
          </Link>

          <button
            style={{
              background: "#171717",
              color: "white",
              border: "1px solid #2a2a2a",
              padding: "16px 28px",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "110px",
          flexWrap: "wrap",
          paddingBottom: "100px",
          paddingLeft: "20px",
          paddingRight: "20px"
        }}
      >
        {[
          { title: "Players Ranked", value: "12,000+" },
          { title: "Regions", value: "24" },
          { title: "Tier Lists", value: "180+" }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: "24px",
              padding: "35px",
              width: "260px",
              boxShadow: "0 0 30px rgba(0,0,0,0.3)"
            }}
          >
            <div
              style={{
                color: "#777",
                marginBottom: "10px"
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                fontSize: "42px",
                fontWeight: "bold"
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
        }
