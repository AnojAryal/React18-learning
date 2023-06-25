import { useEffect, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/api-client";

const useUsers = ()=> {
    
        const [users, setUsers] = useState<User[]>([]);
        const [error, setErrors] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          //get returns promise
          //promise resolved we will get response otherwise error
      
          setLoading(true);
          const { request, cancel } = userService.getAll<User>();
      
          request
            .then((res) => {
              setUsers(res.data);
              setLoading(false);
            })
      
            .catch((error) => {
              if (error instanceof CanceledError) return;
              setErrors(error.message);
              setLoading(false);
            });
      
          return () => cancel();
        }, []);

        return {users ,error , isLoading}
}


export default useUsers;