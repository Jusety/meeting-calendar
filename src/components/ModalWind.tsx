import { Modal } from "antd";
import React from "react";

interface ModalWindProps {
    isModalOpen?: boolean;
    setIsModalOpen?: any;
    children: React.ReactNode;
}

const ModalWind: React.FC<ModalWindProps> = ({
    setIsModalOpen,
    isModalOpen,
    children,
}) => {
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                {children}
            </Modal>
        </>
    );
};

export default ModalWind;
