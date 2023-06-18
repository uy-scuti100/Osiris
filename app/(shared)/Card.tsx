import Link from "next/link";
import React from "react";
import { Image } from "next/image";

type CardProps = {
  className?: string;
  imageHeight: string;
  isSmallcard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallcard = false,
  isLongForm = false,
}: CardProps) => {
  return (
    <div className={`${className}`}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}  `}>Image</div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green ${
              isSmallcard ? "text-base line-clamp-2" : "text-lg"
            } `}
          >
            title
          </h4>
        </Link>
        <div className={`${isSmallcard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs ">author</h5>
          <h6 className="text-wh-300 text-xs">date</h6>
        </div>
        <p
          className={` text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          snippet
        </p>
      </div>
    </div>
  );
};

export default Card;
