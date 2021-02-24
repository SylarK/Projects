import React from 'react';

export default function SearchBox(props) {
  const { query, search } = props;
  const { query, setSearchQuery } = props;

  return (
    <input
      type="text"
      autoFocus
      className="form-control search"
      value={query}
      onChange={(e) => search(e.target.value)}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search"
    />
  );
}
