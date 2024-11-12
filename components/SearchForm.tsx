import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
const SearchForm = ({ query }: { query?: string }) => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search StartUps"
      />
      <div className="gap-2 flex">
        {query && <SearchFormReset />}
        <button className="search-btn text-white">S</button>
      </div>
    </Form>
  );
};

export default SearchForm;
