import React, { useEffect, useState } from "react";
import Connection from "../utils/Connection";
import { getBrowse } from "../driveManagementFunctions";

const MainBrowse = () => {
  const getCategories = getBrowse();

  const getDrives = async () => {};

  useEffect(() => {
    getCategories();
  });
  return <div></div>;
};

export default MainBrowse;
