const Subscribe = () => {
  return (
    <div className="sm:mt-10 text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get ideal news and information
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        type="email"
        placeholder="Enter Email Address"
      />
      <button className=" w-5/6 min-w-[100px]  bg-accent-red text-wh-10 font-semibold py-2 px-5 mt-3 ">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
