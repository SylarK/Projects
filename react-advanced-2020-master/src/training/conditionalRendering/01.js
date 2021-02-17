import React from 'react';
const url = 'http://api.github.com/users/SylarK';

const ConditionalTraining = () => {
  const [user, setUser] = React.useState([]);

  async function searchData() {
    try {
      let res = await fetch(url);
      let val = await res.json();
      console.log(val);
      const { name, html_url } = val;
      setUser([name, html_url]);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    searchData();
    console.log(user);
  }, []);

  const [name, html_url] = user;

  return (
    <>
      <h3>Data Users</h3>
      <ul>
        <li>{name}</li>
        <li>{html_url}</li>
      </ul>
    </>
  );
};

export default ConditionalTraining;
