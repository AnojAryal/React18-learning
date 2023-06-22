import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function FetchingData() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setErrors] = useState("");

  useEffect(() => {
    //get returns promise
    //promise resolved we will get response otherwise error
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => setErrors(error.message));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FetchingData;
