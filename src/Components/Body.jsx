import React from "react";

const Body = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-16 px-6 py-6 bg-violet-500 text-gray-100 gap-8">
        <div className="">
          <h2 className="font-bold text-3xl my-6 max-h-full capitalize">
            Get early access today
          </h2>
          <p className="text-gray-100 text-left ">
            It only takes a minutes to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="w-full ">
          <form action="" className="flex flex-col">
            <div className="w-90">
              <input
                type="text"
                placeholder="buzoemma6@gmailcom"
                className=" border rounded-lg p-2 mb-4 w-full"
              />

              <div className=" ">
                <button
                  type="submit"
                  className="w-full bg-blue-700 p-2 rounded-lg capitalize lg:w-40 md:60 sm:w-full"
                >
                  Get started for free
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Body;
