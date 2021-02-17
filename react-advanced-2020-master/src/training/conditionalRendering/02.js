import React from 'react';
const url = 'https://api.github.com/users/SylarK';

const ConditionalTraining = () => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { name, html_url } = user;
        setUser([name, html_url]);
      });
  }, []);

  return (
    <>
      <h1>Data Users</h1>
      <h2>{console.log(user[0])}</h2>
    </>
  );
};

export default ConditionalTraining;
