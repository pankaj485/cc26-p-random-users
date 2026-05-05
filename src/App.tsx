import { useEffect, useState } from "react";
import "./App.css";

type UserData = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type ApiRes = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    data: UserData[];
  };
};

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
    <div className="users-data  grid grid-cols-1  gap-y-2 m-4 ">
      {users?.map((user, index) => {
        return (
          <div key={index} className="bg-slate-200 border-blue-950 p-2">
            <h1>
              {`${user.name.title}. ${user.name.first} ${user.name.last}`}
            </h1>

            <h3> {user.email} </h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
