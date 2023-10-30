import { useQuery } from "@tanstack/react-query";
import { classNames } from "classnames/bind";

import s from "./HomoPage.module.scss";

const HomoPage = () => {


  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  console.log(data);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;



  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </>
  );
};

export default HomoPage;
