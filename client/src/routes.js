import {
    ADMIN_BASKET,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    ADMIN_HISTORY
} from "./utils/consts";

import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import {Redirect} from "react-router-dom";
import React from "react";
import AdminBasket from "./components/modals/AdminBasket";
import AdminHistory from "./components/modals/AdminHistory";

export const authRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ADMIN_BASKET,
        Component: AdminBasket
    },
    {
        path: ADMIN_HISTORY,
        Component: AdminHistory
    },

    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: '/login',
        Component: () => <Redirect to={SHOP_ROUTE}/>
    },


]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]

