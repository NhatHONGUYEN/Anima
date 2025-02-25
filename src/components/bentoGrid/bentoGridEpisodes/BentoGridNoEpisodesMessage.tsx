import Image from "next/image";

const NO_EPISODES_TEXT = "Sorry! No Episodes";
const NO_IMAGE_SRC = "/gif/sorry.gif";

export default function BentoGridNoEpisodesMessage() {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[500px]">
      <h1 className="mb-4 text-center">{NO_EPISODES_TEXT}</h1>
      <Image
        src={NO_IMAGE_SRC}
        alt="no episode"
        width={400}
        height={400}
        className="rounded-lg object-cover max-w-full"
      />
    </div>
  );
}
