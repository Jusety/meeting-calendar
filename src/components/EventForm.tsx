import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createEvents } from "../app/reducers/event/ActionCreators";
import { IEvent } from "../models/IEvent";
import { dateToString } from "../utils/date";

interface EventFormProps {
    setIsModalOpen: (arg: any) => any;
}

const EventForm: React.FC<EventFormProps> = ({ setIsModalOpen }) => {
    const [event, setEvent] = useState({
        author: "",
        date: "",
        guest: "",
        description: "",
    } as IEvent);

    const dispatch = useAppDispatch();

    const { guests } = useAppSelector((state) => state.event);
    const { user } = useAppSelector((state) => state.auth);

    const selectDate = (date: Dayjs | null) => {
        if (date) setEvent({ ...event, date: dateToString(date.toDate()) });
    };

    const submitForm = () => {
        setIsModalOpen(false);
        dispatch(createEvents({ ...event, author: user.username }));
    };

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event's description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input your description!",
                    },
                ]}
            >
                <Input
                    value={event.description}
                    onChange={(e) =>
                        setEvent({ ...event, description: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item
                label="Event's date"
                name="date"
                rules={[
                    {
                        required: true,
                        message: "Please input date!",
                    },
                    {
                        validator: (_, value: Dayjs) =>
                            dayjs().isBefore(value)
                                ? Promise.resolve()
                                : Promise.reject(
                                      new Error("You can't choose past date!")
                                  ),
                    },
                ]}
            >
                <DatePicker onChange={(date) => selectDate(date)} />
            </Form.Item>
            <Form.Item
                label="Choose guest"
                name="select"
                rules={[
                    {
                        required: true,
                        message: "Please choose guest!",
                    },
                ]}
            >
                <Select
                    style={{ width: 120 }}
                    onChange={(guest) => setEvent({ ...event, guest })}
                >
                    {guests.map((guest) => (
                        <Select.Option
                            key={guest.username}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
