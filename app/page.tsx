// app/maintenance/page.tsx
export default function Maintenance() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b0b0b",
        color: "#f5f5f5",
        padding: 24,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          textAlign: "center",
          padding: "32px 28px",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.04)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0, fontWeight: 800 }}>
          Empathy by Design
        </h1>
        <p style={{ marginTop: 12, opacity: 0.9, fontSize: 18 }}>
          New portfolio experience coming soon.
        </p>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:dsalinetro@pm.me"
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              background: "#d4967d",
              color: "#0b0b0b",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>
          <a
            href="https://www.daniellesalinetro.design"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Visit Portfolio
          </a>
        </div>

        <div style={{ marginTop: 24, opacity: 0.6, fontSize: 13 }}>
          © {new Date().getFullYear()} Danielle Salinetro
        </div>
      </div>
    </main>
  );
}
