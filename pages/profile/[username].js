import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div> Hello {username}!</div>;
};

export default Profile;
