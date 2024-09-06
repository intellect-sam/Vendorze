import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SearchBar = () => {
  return (
    <>
      <div className="">
        <form
          action=""
          className="flex flex-col-reverse gap-5 justify-center  md:flex-row">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<MdOutlineKeyboardArrowDown />}
              textColor={'gray'}
              backgroundColor={'#F5F5F5'}
              textStyle={'12px'}>
              Category
            </MenuButton>
            <MenuList>
              <MenuItem>Clothings and Accessories</MenuItem>
              <MenuItem>Gadgets </MenuItem>
              <MenuItem>Electronics</MenuItem>
              <MenuItem>Food </MenuItem>
              <MenuItem></MenuItem>
            </MenuList>
          </Menu>
          <div className="flex  gap-4">
            <div className="relative rounded-md ">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500">
                  {/* <IoSearchOutline /> */}
                </span>
              </div>
              <input
                type="text"
                className="block rounded-md  py-[10px] laptop, tablet:w-[458px] text-[13px]   bg-gry  placeholder:text-gray-400 px-5"
                placeholder="Search"
              />
            </div>

            <button className="bg-second-col  rounded-md px-10 text-[13px] text-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
