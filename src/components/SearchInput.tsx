import React, { ChangeEventHandler, FormEventHandler } from "react";

interface SearchInputProps {
  change: ChangeEventHandler<HTMLInputElement>;
  search: FormEventHandler<HTMLFormElement>;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  change,
  search,
  placeholder,
}) => (
  <form onSubmit={search}>
    <input className="search" placeholder={placeholder} onChange={change} />
  </form>
);
export default SearchInput;
