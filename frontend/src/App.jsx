import { useState } from "react";

export default function App() {
  // Revisar si ya existe token
  const [token, setToken] = useState(
    sessionStorage.getItem("token")
  );

  // Si no hay token → mostrar Login
  if (!token) {
    return <Login onLogin={setToken} />;
  }

  // Si hay token → mostrar app protegida
  return (
    <div>
      <button onClick={() => {
        sessionStorage.removeItem("token");
        setToken(null);
      }}>
        Logout
      </button>

      <Courses />
    </div>
  );
}
