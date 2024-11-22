/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `category` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `categoria_id` on the `todo` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "todo" DROP CONSTRAINT "todo_categoria_id_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "categoria_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "categoria_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "category_id_seq";

-- AlterTable
ALTER TABLE "todo" ALTER COLUMN "categoria_id" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
