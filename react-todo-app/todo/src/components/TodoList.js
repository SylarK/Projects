import React from 'react';
import Info from './Info';
import FilteredList from './FilteredList';
import Header from './Header';
import Footer from './Footer';
import { applyFilter, search } from '../services/filter';

export default function TodoList(props) {
  const { list, filter, mode, query } = props.data;
  const {
    addNew,
    changeFilter,
    changeStatus,
    changeMode,
    setSearchQuery,
  } = props.actions;
  const count = list.length;
  const items = search(applyFilter(items, filter), query);

  return (
    <div className="todolist">
      <Header {...{ addNew, mode, query, setSearchQuery }} />
      <FilteredList {...{ items, changeStatus }} />
      <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
      <Info {...{ mode }} />
    </div>
  );
}
