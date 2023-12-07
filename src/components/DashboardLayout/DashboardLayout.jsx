import { NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-4 px-20">
      <nav className="col-span-1">
        <ul>
          
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      <div className="col-span-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;