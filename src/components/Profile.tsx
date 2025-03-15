import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };

  const updateAge = (age: string) => {
    setProfile((prev) => ({ ...prev, age: +age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prev) => ({ ...prev, email }));
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-blue-400">
      <h1 className="text-3xl font-black">User Profile</h1>

      <input
        className="bg-blue-200 px-2 rounded-[7px] outline-0"
        type="text"
        placeholder="Enter name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        className="bg-blue-200 px-2 rounded-[7px] outline-0"
        type="number"
        placeholder="Enter age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        className="bg-blue-200 px-2 rounded-[7px] outline-0"
        type="text"
        placeholder="Enter email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
      <div>
        <h2 className="text-xl font-black">Profile summary</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Emails: {profile.email}</p>
      </div>
    </div>
  );
};

export default Profile;
