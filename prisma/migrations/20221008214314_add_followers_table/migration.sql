-- CreateTable
CREATE TABLE "followers" (
    "id" SERIAL NOT NULL,
    "userIdFollowed" INTEGER NOT NULL,
    "userIdFollower" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "followers_userIdFollowed_userIdFollower_key" ON "followers"("userIdFollowed", "userIdFollower");

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userIdFollowed_fkey" FOREIGN KEY ("userIdFollowed") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userIdFollower_fkey" FOREIGN KEY ("userIdFollower") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
