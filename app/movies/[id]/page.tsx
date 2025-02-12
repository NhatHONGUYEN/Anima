import AnimeDetails from "@/components/AnimeDetails";

export default async function MovieDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const animeId = Number(params.id);

  if (isNaN(animeId)) {
    return <div>Invalid ID</div>;
  }

  return <AnimeDetails id={animeId} />;
}
