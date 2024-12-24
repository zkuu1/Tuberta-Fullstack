import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  const onLogout = (ev) => {
    ev.preventDefault();
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div className="header-content">Header</div>
          <div className="user-info">
            {user?.name || "Guest"}
            <a href="#" onClick={onLogout} className="btn-logout">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
