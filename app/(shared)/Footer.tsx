import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-betwen mx-auto gap-16 sm:flex">
        {/* COLUMN 1 */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          {" "}
          <h4 className="font-bold">OSIRIS</h4>
          <p className="my-5">
            Journey into the Worlds of Technology, Science, Finance , Diverse
            Discourse and the World at Large
          </p>
          <p>
            &copy;&nbsp;OSIRIS: Unleashing Insights of Tomorrow All Rights
            Reserved
          </p>
        </div>
        {/* CoLUMN 2 */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          {" "}
          <h4 className="font-bold">OSIRIS</h4>
          <p className="my-5">Technology, Science, finance , Diverse</p>
          <p>Lorem, ipsum dolor.</p>
          <p> Explore thought-provoking articles..</p>
        </div>
        {/* COLUMN 3*/}
        <div className="mt-16 basis-1/2 sm:mt-0">
          {" "}
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Are you ready to delve into the sacred scrolls</p>
          <p> (333) 098-9807</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
