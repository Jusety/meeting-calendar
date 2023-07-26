import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
    const { isAuth } = useAppSelector((state) => state.auth);
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    Component={route.component}
                    key={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={RouteNames.EVENT} replace />}
            />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    Component={route.component}
                    key={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={RouteNames.LOGIN} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
