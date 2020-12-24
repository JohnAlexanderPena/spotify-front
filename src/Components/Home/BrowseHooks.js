// import { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Connection from "../utils/connect";

// const dispatch = useDispatch();
// export const getCats = async () => {
//   console.log("calling");
//   const t = sessionStorage.getItem("access_token");
//   const conn = new Connection(t);
//   const response = await conn.get("/browse/getCategories");
//   if (response) {
//     dispatch({ type: "SET_BROWSE", cats: response.data });
//     return response;
//   } else {
//     console.error(`There was an error trying to delete the file/s:`, response);
//     return response;
//   }
// };
