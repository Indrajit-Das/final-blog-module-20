"use client";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function BlogCards(props) {
    return (
        <div className=" grid grid-cols-3 gap-5">
            {props.blogs.map((item) => {
                return (
                    <Card key={item.id} className="mt-6">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img src={item.image} alt="card-image" />
                        </CardHeader>
                        <CardBody>
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2"
                            >
                                {item.title}
                            </Typography>
                            <Typography className=" text-justify">
                                {item.details}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}
