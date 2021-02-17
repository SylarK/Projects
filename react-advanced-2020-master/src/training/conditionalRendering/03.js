import React from 'react';

const url = 'https://api.github.com/users';

const ConditionalTraining = () => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => {
        setUser(users);
        console.log(users);
      });
  }, []);

  return (
    <>
      <h2>Caption 2</h2>
      <h3>Caption 3</h3>
      <h4>Caption 4</h4>
      <p>
        <b>Nome:</b>
        {user.map((val) => {
          const { avatar_url, id, login, url } = val;
          return (
            <>
              <ul key={id} className="users">
                <li>
                  <img src={avatar_url} alt="Image user" />
                </li>
                <li>URL: {url}</li>
                <li>Login: {login}</li>
              </ul>
            </>
          );
        })}
      </p>
    </>
  );
};

export default ConditionalTraining;
