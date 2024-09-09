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
        </ul>
      </nav>
      <hr />
      <div className='bordered'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
