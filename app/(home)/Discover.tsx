import Image from "next/image";
import Link from "next/link";

type DiscoverCardProps = {
  className?: string;
};

const DiscoverCard = ({ className }: DiscoverCardProps) => {
  return (
    <Link
      className={`${className} relative sm:mt-0 mt-7 block w-full h-96 sm:h-auto hover:opacity-70`}
      href="/"
    >
      {/* // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?id}}`> */}
      <div className="z-0 relative w-full h-full bg-wh-900">
        {/* <Image fill alt="tech" placeholder="blur" src={} /> */} image
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 p-3 left-0">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          Category
        </h4>
        <p className="text-wh-900 mt-2">post title</p>
      </div>
    </Link>
  );
};

type Props = {};

const Discover = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          DISCOVER
        </div>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Discover section */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <DiscoverCard className="col-span-2 row-span-2 bg-wh-500" />
        <DiscoverCard className="col-span-2 row-span-1 bg-wh-500" />
        <DiscoverCard className="col-span-1 row-span-1 bg-wh-500" />
        <DiscoverCard className="col-span-1 row-span-1 bg-wh-500" />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        doloribus error laudantium reprehenderit
      </p>
    </section>
  );
};

export default Discover;
