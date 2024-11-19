"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8", // Light grayish-blue background
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff", // White card background
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        {session ? (
          <>
            <h1 style={{ marginBottom: "1rem", color: "#333" }}>
              Welcome, {session.user.name}
            </h1>
            <p style={{ color: "#555" }}>
              Here are the details we received from Google:
            </p>
            <pre
              style={{
                backgroundColor: "#f7f7f7",
                padding: "1rem",
                borderRadius: "5px",
                textAlign: "left",
                overflowX: "auto",
                color: "#333",
                fontSize: "0.9rem",
              }}
            >
              {JSON.stringify(session, null, 2)}
            </pre>
            <button
              onClick={() => signOut()}
              style={{
                backgroundColor: "#ff6b6b", // Soft red
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: "1rem", color: "#333" }}>
              Please Sign In
            </h1>
            <button
              onClick={() => signIn("google")}
              style={{
                backgroundColor: "#4caf50", // Green shade
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Sign In with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
