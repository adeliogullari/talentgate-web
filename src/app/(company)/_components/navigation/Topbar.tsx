"use client";

import SearchField from "../input/SearchField";
import Help from "../button/Help";
import Notifications from "../dropdown-menu/Notifications";
import Account from "../dropdown-menu/Account";

const Topbar = () => {

  return (
    <div className="flex w-full justify-between border-b items-center min-h-14 px-4">
      <SearchField />

      <div className="flex items-center gap-5">
        <Help />

        <Notifications />

        <Account />
      </div>
    </div>
  );
};

export default Topbar;
