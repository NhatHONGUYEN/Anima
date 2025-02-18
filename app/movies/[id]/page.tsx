import AnimeDetails from "@/components/AnimeDetails";
import AnimeReviews from "@/components/AnimeReviews";
import TopAnimeSlider from "@/components/TopAnimeSlider";

export default async function MovieDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const animeId = Number(params.id);

  if (isNaN(animeId)) {
    return <div>Invalid ID</div>;
  }

  return (
    <div>
      <AnimeDetails id={animeId} />
      <AnimeReviews id={animeId} />
      <TopAnimeSlider animeId={animeId} />
    </div>
  );
}
