/*
  Warnings:

  - Added the required column `code` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "code" VARCHAR(25) NOT NULL;
