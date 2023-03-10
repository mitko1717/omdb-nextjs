import React, { FC, useState } from "react";
import NextBtn from "./Icons/NextButton";
import PrevBtn from "./Icons/PrevButton";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/actions";

const Pagination: FC = () => {
  const { totalResults, currentPage } = useAppSelector((state) => state.data);
  const { setPage } = useActions();
  const recordsPerPage = 10;
  const nPages = Math.ceil(totalResults / recordsPerPage);
  const pageNumberss = [...Array.from(Array(nPages + 1).keys())].slice(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const pageNumberLimit = 5;

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setPage(currentPage - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    onPrevClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  const handleSetPageNumber = (page: number) => {
    setPage(page);
  };

  const pages = [];
  for (let i = 1; i <= pageNumberss.length; i++) {
    pages.push(i);
  }

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <span
          key={page}
          onClick={() => handleSetPageNumber(page)}
          className={`w-[24px] h-[24px] text-center cursor-pointer ${
            currentPage === page
              ? "font-bold bg-[#2e3444] text-white"
              : "text-[#ffffff]"
          } ${
            MyRound10(totalResults) >= page * 10
              ? ""
              : "pointer-events-none opacity-25"
          }`}
        >
          {page}
        </span>
      );
    } else return <span className="hidden"></span>;
  });

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <span
        onClick={() => handleNextClick()}
        className={`${
          totalResults > currentPage * 10
            ? ""
            : "pointer-events-none opacity-25"
        }`}
      >
        &hellip;
      </span>
    );
  }

  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <span
        onClick={() => handlePrevClick()}
        className={`${
          totalResults > currentPage * 10
            ? ""
            : "pointer-events-none opacity-25"
        }`}
      >
        &hellip;
      </span>
    );
  }

  function MyRound10(val: number) {
    return Math.ceil(val / 10) * 10;
  }

  return (
    <div className="w-full flex">
      <ul className="flex h-[24px] gap-3 mx-auto items-center justify-center mb-6 mt-3">
        <button
          onClick={() => handlePrevClick()}
          disabled={currentPage === pages[0]}
          className={`flex ${
            MyRound10(totalResults) >= currentPage * 10
              ? ""
              : "pointer-events-none opacity-25"
          } ${currentPage === pages[0] ? "opacity-25" : ""}
          `}
        >
          <PrevBtn />
        </button>
        {pageDecremenEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
        <button
          onClick={() => handleNextClick()}
          disabled={currentPage === pages[pages.length - 1]}
          className={`flex ${
            MyRound10(totalResults) > currentPage * 10
              ? ""
              : "pointer-events-none opacity-25"
          } ${currentPage === pages[pages.length - 1] ? "opacity-25" : ""}`}
        >
          <NextBtn />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
