import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  console.log("router", router.query.id);

  return (
    <div>
      <Link href={"/"}>Main (No server hit)</Link>
    </div>
  );
};

// https://www.omdbapi.com/?apikey=8dd4c804&i=tt2975590
