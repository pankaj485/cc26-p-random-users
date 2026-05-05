import { useEffect, useState } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard.js";
import type { ApiRes, UserData } from "./types.js";

function App() {
  const [users, SetUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const API_ENDPOINT = "https://api.freeapi.app/api/v1/public/randomusers";

    fetch(API_ENDPOINT)
      .then((_) => _.json())
      .then((res: ApiRes) => {
        if (res.success && res.statusCode === 200) {
          const usersData = res.data.data;
          SetUsers(usersData);
          console.log(usersData[0]);
        }
      });
  }, []);

  return (
    <div className="bg-slate-200 p-4 w-max-[1200px]">
      <h1 className="text-center text-2xl font-semibold">
        {" "}
        FreeAPI Users Data
      </h1>

      <p></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-4 max-w-300 mx-auto mt-10">
        {users?.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
