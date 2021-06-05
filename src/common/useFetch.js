import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error while fetcing data");
        }

        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
