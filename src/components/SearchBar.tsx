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
      <div>
        <form
          action=""
          className="flex flex-col gap-5 justify-center tablet, laptop, tablet:flex-row">
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
          <div className="flex justify-between gap-4">
            <div className="relative rounded-md ">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500">
                  <IoSearchOutline />
                </span>
              </div>
              <input
                type="text"
                className="block rounded-md  w-[200px] py-[10px] pl-10 pr-20 laptop, tablet:w-[458px] text-[13px]   bg-gry  placeholder:text-gray-400"
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
