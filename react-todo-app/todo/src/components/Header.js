import React from 'react';
import InputWrapper from './InputWrapper';

const Header = (props) => {
  const { title, addNew } = props;

  return (
    <>
      <header>
        <h1>{title.toUpperCase()}</h1>
        <InputBox {...props} />
      </header>
    </>
  );
};

export default Header;
