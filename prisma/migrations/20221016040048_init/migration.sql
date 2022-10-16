/*
  Warnings:

  - The `created_at` column on the `activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deleted_at` column on the `activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_at` column on the `groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deleted_at` column on the `groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_at` column on the `members_activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `members_activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deleted_at` column on the `members_activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_at` column on the `members_group` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `members_group` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deleted_at` column on the `members_group` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_at` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_at` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deleted_at` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "activities" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3),
DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" DATE;

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3),
DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" DATE;

-- AlterTable
ALTER TABLE "members_activities" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3),
DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" DATE;

-- AlterTable
ALTER TABLE "members_group" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3),
DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" DATE;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3),
DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" DATE;
