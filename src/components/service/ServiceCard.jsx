"use client";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
} from "@material-tailwind/react";

export function ServiceCard(props) {
    return (
        <section className=" grid grid-cols-1 md:lg:grid-cols-3 gap-6 md:lg:gap-8">
            {props.services.map((item) => {
                let { id, title, icon, dec } = item;
                return (
                    <Card
                        key={id}
                        className="mt-6 border-2 rounded-md border-gray-300"
                        shadow={false}
                    >
                        <CardBody>
                            <Avatar src={icon} size="lg" />
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2"
                            >
                                {title}
                            </Typography>
                            <Typography>{dec}</Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="#" className="inline-block">
                                <Button
                                    size="sm"
                                    variant="text"
                                    className="flex items-center gap-2"
                                >
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                );
            })}
        </section>
    );
}
