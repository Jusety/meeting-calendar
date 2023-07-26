import { Row, Layout, Menu } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authReducer } from "../app/reducers/auth";
import { logout } from "../app/reducers/auth/userLog";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const dispatch = useAppDispatch();
    const { isAuth, user } = useAppSelector((state) => state.auth);
    return (
        <div>
            <Layout.Header style={{ backgroundColor: "teal" }}>
                <Row justify="end">
                    {isAuth ? (
                        <>
                            {" "}
                            <div className="login__name">{user.username}</div>
                            <Menu
                                id="login"
                                mode="vertical"
                                selectable={false}
                                items={[
                                    {
                                        key: "1",
                                        label: "Log out",
                                        onClick: () => dispatch(logout()),
                                    },
                                ]}
                            />
                        </>
                    ) : (
                        <Menu
                            id="login"
                            mode="vertical"
                            selectable={false}
                            items={[
                                {
                                    key: "1",
                                    label: "Log in",
                                    onClick: () =>
                                        dispatch(
                                            authReducer.actions.setisModalLoginOpen(
                                                true
                                            )
                                        ),
                                },
                            ]}
                        />
                    )}
                </Row>
            </Layout.Header>
        </div>
    );
};

export default Navbar;
