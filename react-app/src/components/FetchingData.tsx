import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function FetchingData() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setErrors] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    //get returns promise
    //promise resolved we will get response otherwise error
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setErrors(error.message);
        setUsers(originalUsers);
      });
  };
  //adding new user --> first updating ui/ux and then fetchning to server
  const addUser = () => {
    const originalUsers = [...users]; //restore the list to original state
    const newUser = { id: 0, name: "FraNzY" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users])) //accessing the data property
      //destructuring the response

      .catch((error) => {
        setErrors(error.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchingData;
