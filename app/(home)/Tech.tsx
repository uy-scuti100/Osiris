import React from "react";
import Card from "app/(shared)/Card";

type Props = {};

const Tech = (props: Props) => {
  return (
    <section>
      <hr className="border-1" />
      {/* header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange px-3 py-2 2px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-xl">
          Journey into the World of Technology.
        </p>
      </div>

      {/* tech section */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5 ">
        {/* large card */}
        <Card
          className="bg-wh-500 col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm={true}
        />
        {/* small card */}
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-48"
          isSmallcard
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-48"
          isSmallcard
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10"
          imageHeight="h-48"
          isSmallcard
        />
      </div>
    </section>
  );
};

export default Tech;
