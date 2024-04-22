import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import CatUsuarios from "../pages/CatUsuarios";
import CatClientes from "../pages/CatClientes";
import CatSucursales from "../pages/CatSucursales";
import CapturaOrden from "../pages/CapturaOrden";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Inventario from "../pages/Inventario";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Inicio />,
            },
            {
                path: '/cat/CatUsuarios',
                element: <CatUsuarios />,
            },
            {
                path: '/cat/CatClientes',
                element: <CatClientes />,
            },
            {
                path: '/cat/CatSucursales',
                element: <CatSucursales />,
            },    
            {
                path: '/capturaOrden',
                element: <CapturaOrden />,
            },
            {
                path: '/inventario',
                element: <Inventario />,
            },
        ]
    },
]);
