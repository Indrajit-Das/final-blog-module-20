"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export function ManagementTimeline(props) {
    return (
        <div className=" w-full">
            <Timeline>
                {props.members.map((item) => {
                    return (
                        <TimelineItem key={item.id}>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                    <Avatar
                                        size="xl"
                                        src={item?.image}
                                        alt={item?.name}
                                        withBorder
                                    />
                                </TimelineIcon>
                                <div>
                                    <Typography variant="h5" color="blue-gray">
                                        {item?.name}
                                    </Typography>
                                    <Typography>{item?.designation}</Typography>
                                </div>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                    color="gary"
                                    className="font-normal text-gray-600"
                                >
                                    {item?.bio}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );
}
