import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import useApi from "@/hooks/useApi";
import Loading from "../shared/Loading";

const TripStatusCards = () => {
  const { data: trips, loading, error } = useApi("/trips");

  if (loading) return <Loading />;
  if (error) return <p>Error loading trips</p>;

  // ✅ Function to calculate trip status counts
  const getTripStats = (trips) => {
    const today = new Date();
    let upcoming = 0;
    let ongoing = 0;
    let completed = 0;

    trips.forEach((trip) => {
      const start = new Date(trip.startDate);
      const end = new Date(trip.endDate);

      if (start > today) {
        upcoming++;
      } else if (start <= today && end >= today) {
        ongoing++;
      } else if (end < today) {
        completed++;
      }
    });

    return { upcoming, ongoing, completed };
  };

  const { upcoming, ongoing, completed } = getTripStats(trips || []);

  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-4xl font-semibold">{trips?.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ongoing Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-4xl font-semibold">{ongoing}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-4xl font-semibold">{upcoming}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-4xl font-semibold">{completed}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TripStatusCards;
