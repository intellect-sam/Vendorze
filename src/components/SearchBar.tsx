import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';

import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <>
      <div>
        <form action="">
          <div className="relative mt-2 rounded-md shadow-sm ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <IoSearchOutline />
              </span>
            </div>
            <input
              type="text"
              className="block w-full rounded-md  py-1 pl-10 pr-20 md:w-[458px]   bg-gry  placeholder:text-gray-400   sm:text-sm sm:leading-6"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center text-primary text-sm">
              <button className="bg-second-col h-full rounded-md px-4">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
