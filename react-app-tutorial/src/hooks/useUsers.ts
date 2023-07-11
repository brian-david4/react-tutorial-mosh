import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User} from "../services/user-service";


const useUsers = () => {
   // useEffect called after each render.
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 // to load the data
 useEffect(() => {
    setIsLoading(true);
    // have to specify <User> as in http-service, the type is set to 'T' - (generic);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(true);
      });

    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError};
}

export default useUsers;