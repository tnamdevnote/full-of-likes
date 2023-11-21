import useSWR from "swr";

async function getLikes() {
  const res = await fetch("api/likes/");
  if (!res.ok) {
    throw new Error("Failed to fetch likes");
  }
  return res.json();
}

async function updateLikes(count: number) {
  const res = await fetch("api/likes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
  });

  if (!res.ok) {
    throw new Error("Failed to post likes");
  }

  return res.json();
}

export function useLikes() {
  const { data, error, isLoading } = useSWR("likes", () => getLikes());

  const incrememnt = () => {};

  return {
    total: data?.total._sum.likes,
    currentLikes: data?.likes.likes,
    error,
    isLoading,
  };
}
