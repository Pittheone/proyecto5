import { createBrowserRouter } from "react-router-dom";
import DrawingList from "./pages/DrawingList";
import App from "./App";

import Layout from "./components/Layout";
import DrawingDetail from "./pages/DrawingDetail";
import ErrorBoundary from "./components/ErrorBoundary";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: (<ErrorBoundary> <App /> </ErrorBoundary>)},
            {path: '/DrawingList', element: (<ErrorBoundary> <DrawingList /> </ErrorBoundary>) },
            {path: '/DrawingList/:name', element: (<ErrorBoundary> <DrawingDetail /> </ErrorBoundary>)},
        ]
    }
])

export default router;