// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b0b0b",
        color: "#f5f5f5",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          textAlign: "center",
          padding: "32px 28px",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.04)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ fontSize: "40px", lineHeight: 1.1, margin: 0, fontWeight: 800 }}>
          Empathy by Design
        </h1>
        <p styl
