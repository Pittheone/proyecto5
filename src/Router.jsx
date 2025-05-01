import { createBrowserRouter } from "react-router-dom";
import DrawingList from "./pages/DrawingList";
import App from "./App";

import Layout from "./components/Layout";
import DrawingDetail from "./pages/DrawingDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <App />},
            {path: '/DrawingList', element: <DrawingList />},
            {path: '/DrawingList/:name', element: <DrawingDetail />},
        ]
    }
])

export default router;