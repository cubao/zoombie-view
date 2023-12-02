import React from 'react';
import { Link, Outlet } from 'umi';

export default function Layout(): React.ReactElement {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <Outlet />
    </div>
  );
}
