const MAX_TITLE_LENGTH = 16;

export default function BentoGridEpisodeTitle({ title }: { title: string }) {
  return (
    <p className="lg:text-center py-4">
      {/* Afficher le titre complet sur mobile */}
      <span className="lg:hidden">{title}</span>

      {/* Appliquer le slice uniquement sur les écrans larges */}
      <span className="hidden lg:inline">
        {title.length > MAX_TITLE_LENGTH
          ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
          : title}
      </span>
    </p>
  );
}
