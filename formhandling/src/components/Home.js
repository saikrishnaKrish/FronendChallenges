import { useAuth } from "./context/context";

function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      Home compoent
      <div>{isAuthenticated ? "Yes" : "No"}</div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
