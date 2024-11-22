/*
  Warnings:

  - You are about to drop the column `user_id` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "categoria_user_id_fkey";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "user_id";
