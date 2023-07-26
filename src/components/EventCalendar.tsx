import { Badge, Calendar } from "antd";
import React from "react";
import { Dayjs } from "dayjs";
import { IEvent } from "../models/IEvent";
import { dateToString } from "../utils/date";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
    const dateCellRender = (value: Dayjs) => {
        const formatedDate = dateToString(value.toDate());
        const currentDayEvents = events.filter((e) => e.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((e, index) => (
                    <li key={index}>
                        <Badge status="success" text={e.description} />
                    </li>
                ))}
            </div>
        );
    };
    return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
