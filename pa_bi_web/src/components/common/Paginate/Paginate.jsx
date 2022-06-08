import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = () => {
  const [page, count, setPage] = useState(1);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};
export default Paging;
