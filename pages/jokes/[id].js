import { useRouter } from "next/router";
const joke = () => {
  const router = useRouter();
  const id = router.query.id;
  return <div>Joke {id}</div>;
};
export default joke;
