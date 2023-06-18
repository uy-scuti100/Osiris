import React from "react";
import Card from "app/(shared)/Card";

type Props = {};

const Travel = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      {/* header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green px-3 py-2 2px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-xl">Awesome Travel Experiences</p>
      </div>
      {/* cards row */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-80"
          isSmallcard
        />
        <Card
          className="basis-1/3 bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-80"
          isSmallcard
        />
        <Card
          className="basis-1/3 bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-80"
          isSmallcard
        />
      </div>
      <Card
        className="bg-wh-500 sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
      />
    </section>
  );
};

export default Travel;
