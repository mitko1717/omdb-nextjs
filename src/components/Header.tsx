import { HeaderProps } from "@/modules/interfaces";
import { ChangeEvent, FormEvent, FC, useCallback } from "react";
import debounce from "lodash.debounce";

const Header: FC<HeaderProps> = ({ setMovieQuery }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMovieQuery(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const debouncedChangeHandler = useCallback(debounce(handleChange, 1000), []);

  const label = `mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300`;
  const divForSVG = `flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none`;
  const input = `block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 bg-white border-[#DADDE1]`;

  return (
    <header className={"flex w-full h-fit mt-4 items-center"}>
      <form className={"h-fit w-[40%] mx-auto"} onSubmit={onSubmit}>
        <label htmlFor="default-search" className={label}>
          Search
        </label>
        <div className="relative">
          <div className={divForSVG}>
            <Icon />
          </div>
          <input
            // value={movieQuery}
            type="search"
            id="default-search"
            onChange={debouncedChangeHandler}
            className={input}
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </header>
  );
};

export default Header;

export const Icon = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
