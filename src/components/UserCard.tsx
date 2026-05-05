import type { UserData } from "../types";

const UserCard = ({ user }: { user: UserData }) => {
  return (
    <div className="min-w-70 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
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
          <span className="font-medium">Location:</span> {user.location.city},{" "}
          {user.location.state}, {user.location.country}
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
};

export { UserCard };
