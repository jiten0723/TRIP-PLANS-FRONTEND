import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { famousTrips } from "@/lib/constants";
import { Button } from "../ui/Button";

const FamousTrips = () => {
  return (
    <section className=" py-20 px-10" id="trips">
      <div className="container mx-auto px-4"></div>
      <div className=" text-center mb-12">
        <h2 className="text-5xl font-bold"> Famous Trips</h2>
        <p className="text-lg mt-2">Features that wander wise provides</p>
      </div>
      {/* feature card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {famousTrips.map((trip) => {
          return (
            <Card key={trip.place} className={"text-center"}>
              <CardHeader>
                <div className=" h-60 w-full overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.place}
                    className="h-full w-full"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-2">{trip.place}</p>
                <CardDescription
                  className={"flex items-center justify-between"}
                >
                  <p className="text-lg text-gray-600">{trip.days}days</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {trip.budget}USD
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="{w-full}">View Details </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FamousTrips;
