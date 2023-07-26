import { Button, Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchEvents, fetchGuests } from "../app/reducers/event/ActionCreators";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import ModalWind from "../components/ModalWind";

interface EventProps {}

const Event: React.FC<EventProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);
    const { events } = useAppSelector((state) => state.event);

    useEffect(() => {
        dispatch(fetchGuests());
        dispatch(fetchEvents(user.username));
    }, [dispatch, user.username]);

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center" style={{ marginTop: 10 }}>
                <Button onClick={() => setIsModalOpen(true)}>Add Event</Button>
            </Row>
            <ModalWind
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <EventForm setIsModalOpen={setIsModalOpen} />
            </ModalWind>
        </Layout>
    );
};

export default Event;
