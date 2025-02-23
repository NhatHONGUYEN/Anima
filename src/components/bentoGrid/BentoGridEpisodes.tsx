import { BentoGridEpisodesProps } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";

export default function BentoGridEpisodes({
  episodes,
}: BentoGridEpisodesProps) {
  return (
    <div className="relative lg:col-span-2 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-px rounded-xl" />

      <div className="relative flex h-[600px] flex-col overflow-hidden rounded-xl">
        <ScrollArea className="p-4  overflow-x-hidden">
          {/* Vérification si des épisodes existent */}
          {!episodes || episodes.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full min-h-[500px]">
              <h1 className="mb-4 text-center">
                Sorry ! <br /> No Episodes
              </h1>
              <Image
                src="/sorry.gif"
                alt="no episode"
                width={400}
                height={400}
                className="rounded-lg object-cover max-w-full"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <h1 className="pb-4 lg:text-center">Episodes</h1>
              <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                {episodes.map((episode) => (
                  <div key={episode.mal_id} className="max-w-full">
                    {/* Image de l'épisode */}
                    <div className="relative">
                      {episode?.images?.jpg?.image_url ? (
                        <Image
                          src={episode.images.jpg.image_url}
                          alt={`Episode ${episode.mal_id}`}
                          width={400}
                          height={400}
                          className="rounded-lg w-full h-auto object-cover max-w-full "
                          priority
                          quality={100}
                        />
                      ) : (
                        <div className="flex flex-col  pt-10 justify-center items-center h-full ">
                          <h1>Sorry No Image</h1>
                          <Image
                            src="/sorry.gif"
                            alt="no episode"
                            width={400}
                            height={400}
                            className="rounded-lg object-cover max-w-full"
                            quality={100}
                            priority
                          />
                        </div>
                      )}
                    </div>
                    {/* Titre de l'épisode */}
                    <p className="lg:text-center py-4">
                      {/* Afficher le titre complet sur mobile */}
                      <span className="lg:hidden">{episode.title}</span>

                      {/* Appliquer le slice uniquement sur les écrans larges */}
                      <span className="hidden lg:inline">
                        {episode.title.length > 16
                          ? `${episode.title.slice(0, 16)}...`
                          : episode.title}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Contour avec effet de shadow */}
      <div className="pointer-events-none ring-2 ring-border absolute inset-px rounded-lg shadow-sm" />
    </div>
  );
}
