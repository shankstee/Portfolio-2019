import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createRouter,
    createRoute,
    createRootRoute,
    RouterProvider,
    Outlet,
} from '@tanstack/react-router';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import styles
import './index.css';

// Layout component
const RootComponent = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

// TanStack Router definitions
const rootRoute = createRootRoute({
    component: RootComponent,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects,
});

const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: Contact,
});

const routeTree = rootRoute.addChildren([indexRoute, projectsRoute, contactRoute]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
