import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <section>
        <header>nav</header>
        <main>
            <Outlet/>
        </main>
    </section>
  );
}

export default Dashboard