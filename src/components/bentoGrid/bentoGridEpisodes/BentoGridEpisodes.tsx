import { ScrollArea } from "@/components/ui/scroll-area";
import { BentoGridEpisodesProps } from "@/lib/types";
import BentoGridNoEpisodesMessage from "./BentoGridNoEpisodesMessage";
import BentoGridEpisode from "./BentoGridEpisode";

const EPISODES_TITLE = "Episodes";

export default function BentoGridEpisodes({
  episodes,
}: BentoGridEpisodesProps) {
  return (
    <div className="relative lg:col-span-2 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-px rounded-xl" />

      <div className="relative flex h-[600px] flex-col overflow-hidden rounded-xl">
        <ScrollArea className="p-4 overflow-x-hidden">
          {/* Vérification si des épisodes existent */}
          {!episodes || episodes.length === 0 ? (
            <BentoGridNoEpisodesMessage />
          ) : (
            <div className="flex flex-col gap-4">
              <h1 className="pb-4 lg:text-center">{EPISODES_TITLE}</h1>
              <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                {episodes.map((episode) => (
                  <BentoGridEpisode key={episode.mal_id} episode={episode} />
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
