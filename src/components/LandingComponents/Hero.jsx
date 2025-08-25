import React from "react";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-white">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="https://a.cdn-hotels.com/gdcs/production115/d1326/a5981c45-4f4d-44b8-a581-d9b10985fcb7.jpg"
          alt="background"
          className="w-full h-full opacity-60"
        />
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-black/60 -z-10"></div>

      <div className="flex flex-col items-center justify-center text-center gap-6 min-h-[80vh]  max-w-2/3 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore the world with WanderWise
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          repellat quo voluptatem corrupti sint aperiam. Enim, ab unde qui,
          minus natus doloribus fugit sunt quis, dolore a quod. Aliquam,
          cupiditate?
        </p>
        <Button className="bg-gray-500">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
