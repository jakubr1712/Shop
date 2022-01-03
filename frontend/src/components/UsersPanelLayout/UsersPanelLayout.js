import React from "react";

import UsersPanel from "../UsersPanel";

import links from "../../constants/adminAside";

const UsersPanelLayout = ({ children }) => {
  return (
    <div className="user-page">
      <UsersPanel links={links} />
      {children}
    </div>
  );
};

export default UsersPanelLayout;
