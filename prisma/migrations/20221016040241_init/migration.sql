-- AlterTable
ALTER TABLE "activities" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "members_activities" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "members_group" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" DROP NOT NULL;
