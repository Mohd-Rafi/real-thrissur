import React, { useState } from 'react';

const Header = () => {
  const [openli, setOpenli] = useState(false);
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between py-2">
          {/* <h1 className="text-white text-xl font-semibold">
            REAL THRISSUR PROPERTIES
          </h1> */}
          <div className="flex items-center">
            <div className="w-60">
              <img src="/logo.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <ul className="flex text-primary gap-6 items-center text-xl cursor-pointer">
            <li className="hover:text-red-600">Home</li>
            <li className=" relative">
              <h1
                className="hover:text-red-600"
                onClick={() => {
                  setOpenli(!openli);
                }}
              >
                Properties
              </h1>
              {openli && (
                <div className="absolute z-10 w-full mt-2">
                  <div className="bg-white text-center">
                    <h1 className="text-lg mt-2 hover:text-red-600">Buy</h1>
                    <h1 className="text-lg mt-2 pb-4 hover:text-red-600">
                      Rent
                    </h1>
                  </div>
                </div>
              )}
            </li>
            <li className="hover:text-red-600">News</li>
            <li className="hover:text-red-600">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
