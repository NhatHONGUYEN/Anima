import AnimeDetails from "@/components/AnimeDetails";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const animeId = Number(params.id);

  if (isNaN(animeId)) {
    return <div>Invalid ID</div>;
  }

  return <AnimeDetails id={animeId} />;
}
