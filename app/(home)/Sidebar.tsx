import React from "react";
import SocialLinks from "app/(shared)/SocialLinks";
import Subscribe from "./Subscribe";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="mt-10 sm:mt-0">
      <h4 className="mt-10 bg-wh-900 px-5 text-wh-50 text-xs text-center py-3 font-bold">
        Subscribe and Follow
      </h4>
      <div className="mx-5 my-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-xs text-center py-3 font-bold">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8 ">profile image</div>
      <h4 className="px-5 text-wh-500 text-center py-3 font-bold">Uy Scuti</h4>
      <p className="text-wh-500 text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        molestiae voluptatum eius.
      </p>
    </section>
  );
};

export default Sidebar;
