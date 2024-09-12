import { Outlet, Link } from 'react-router-dom';

let Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/todos'>Todos</Link>
          </li>
          <li>
            <Link to='/timer'>Timer</Link>
          </li>
        </ul>
      </nav>

      <div className=' border p-5'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
