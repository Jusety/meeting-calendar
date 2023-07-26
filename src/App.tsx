import { useEffect } from "react";
import { Layout } from "antd";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { authReducer } from "./app/reducers/auth";
import { IUser } from "./models/IUser";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            dispatch(authReducer.actions.setAuth(true));
            dispatch(
                authReducer.actions.setUser({
                    username: localStorage.getItem("username"),
                } as IUser)
            );
        }
    }, [dispatch]);

    return (
        <div>
            <Layout>
                <Navbar />
                <Layout.Content>
                    <AppRouter />
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;
