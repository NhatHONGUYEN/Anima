-- CreateTable
CREATE TABLE "Anime" (
    "mal_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "title_english" TEXT,
    "title_japanese" TEXT,
    "image_url" TEXT,
    "synopsis" TEXT,
    "score" DOUBLE PRECISION,
    "scored_by" INTEGER,
    "rank" INTEGER,
    "popularity" INTEGER,
    "members" INTEGER,
    "favorites" INTEGER,
    "type" TEXT,
    "episodes" INTEGER,
    "status" TEXT,
    "duration" TEXT,
    "rating" TEXT,
    "genres" TEXT[],
    "studios" TEXT[],
    "aired_from" TIMESTAMP(3),
    "aired_to" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("mal_id")
);

-- CreateTable
CREATE TABLE "Like" (
    "userId" TEXT NOT NULL,
    "mal_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("userId","mal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anime_mal_id_key" ON "Anime"("mal_id");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_mal_id_fkey" FOREIGN KEY ("mal_id") REFERENCES "Anime"("mal_id") ON DELETE CASCADE ON UPDATE CASCADE;
