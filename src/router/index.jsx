import { createBrowserRouter } from "react-router-dom";
import CatUsuarios from "../pages/CatUsuarios";
import CatClientes from "../pages/CatClientes";
import CatSucursales from "../pages/CatSucursales";
//import CapturaOrden from "../pages/CapturaOrden";

import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import LayoutPrivate from "../layout/LayoutPrivate";
import Inventario from "../pages/Inventario";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Indicios from "../pages/Indicios";
import IndiciosFilter from "../pages/IndiciosFilter";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: '/menu',
                element: <LayoutPrivate />,
                errorElement: <Login/>,
                children: [
                    {
                        index: true,
                        element: <Menu />,
                    },            {
                        path: '/menu/cat/CatUsuarios',
                        element: <CatUsuarios />,
                    },
                    {
                        path: '/menu/cat/CatClientes',
                        element: <CatClientes />,
                    },
                    {
                        path: '/menu/cat/CatSucursales',
                        element: <CatSucursales />,
                    },    
                    {
                        path: '/menu/Indicios',
                        element: <Indicios />,
                    },
                    {
                        path: '/menu/IndiciosFilter',
                        element: <IndiciosFilter />,
                    },
                    {
                        path: '/menu/inventario',
                        element: <Inventario />,
                    },
        
                ]
            },
        ]
    },
]);
