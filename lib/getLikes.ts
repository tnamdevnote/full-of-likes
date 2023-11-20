export async function getLikes() {
  const res = await fetch("api/likes/");
  if (!res.ok) {
    throw new Error("Failed to fetch likes");
  }
  return res.json();
}
