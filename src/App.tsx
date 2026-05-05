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
    <div className="users-data grid grid-cols-1 sm:grid-cols-2 gap-6 m-4 max-w-300 mx-auto">
      {users?.map((user, index) => {
        return (
          <div
            key={index}
            className="min-w-75 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={user.picture.large}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {user.name.title} {user.name.first} {user.name.last}
                </h2>
                <p className="text-sm text-gray-500">@{user.login.username}</p>
              </div>
            </div>

            {/* Divider */}
            {/* <div className="my-4 border-t" /> */}

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-700 mt-4">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
              <p>
                <span className="font-medium">Age:</span> {user.dob.age}
              </p>
              <p>
                <span className="font-medium">Location:</span>{" "}
                {user.location.city}, {user.location.state},{" "}
                {user.location.country}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-400">
                Joined: {new Date(user.registered.date).toLocaleDateString()}
              </span>
              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                {user.nat}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
