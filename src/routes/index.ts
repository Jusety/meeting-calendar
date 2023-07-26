import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export enum RouteNames {
    LOGIN = "/login",
    EVENT = "/",
}

interface IRoute {
    path: string;
    component: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, component: Login },
];
export const privateRoutes: IRoute[] = [
    { path: RouteNames.EVENT, component: Event },
];
