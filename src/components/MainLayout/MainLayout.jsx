import {  NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Spiner from "../Spiner/Spiner";


const MainLayout = () => {
  const navigation = useNavigation()
  console.log(navigation);
  return (
    <div>
      <section className="flex justify-between p-10  shadow-lg">
        <h1 className="text-2xl font-bold">Amajhon</h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        {
         navigation.state === 'loading'? <Spiner></Spiner> : <Outlet></Outlet>
        }
       
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;