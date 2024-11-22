/*
  Warnings:

  - You are about to drop the column `userId` on the `todo` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "todo" DROP CONSTRAINT "todo_userId_users_id_fk";

-- AlterTable
ALTER TABLE "todo" DROP COLUMN "userId",
ADD COLUMN     "categoria_id" BIGINT,
ADD COLUMN     "completed" BOOLEAN DEFAULT false,
ADD COLUMN     "end_date" TIMESTAMPTZ(6),
ADD COLUMN     "priority" TEXT,
ADD COLUMN     "start_date" TIMESTAMPTZ(6),
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "update_at" TIMESTAMPTZ(6),
    "user_id" INTEGER,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_userId_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "categoria_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
