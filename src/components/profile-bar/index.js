import { store } from "@/store";

const ProfileBar = () => {
  const { user } = store.getState().user;

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  );
};

export default ProfileBar;
