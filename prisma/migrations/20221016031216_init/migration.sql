-- CreateEnum
CREATE TYPE "status_activity" AS ENUM ('pending', 'inProgress', 'complete');

-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "id_group" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "status" "status_activity" DEFAULT 'pending',
    "date_start" DATE NOT NULL,
    "date_end" DATE NOT NULL,
    "created_at" TIME(6) NOT NULL,
    "updated_at" TIME(6),
    "deleted_at" TIME(6),

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIME(6) NOT NULL,
    "updated_at" TIME(6),
    "deleted_at" TIME(6),

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members_activities" (
    "id" SERIAL NOT NULL,
    "id_activity" INTEGER NOT NULL,
    "id_member" INTEGER NOT NULL,
    "created_at" TIME(6) NOT NULL,
    "updated_at" TIME(6),
    "deleted_at" TIME(6),

    CONSTRAINT "members_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members_group" (
    "id" SERIAL NOT NULL,
    "id_member" INTEGER NOT NULL,
    "id_group" INTEGER NOT NULL,
    "created_at" TIME(6) NOT NULL,
    "updated_at" TIME(6),
    "deleted_at" TIME(6),
    "isadmin" BOOLEAN NOT NULL,

    CONSTRAINT "members_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" VARCHAR(300) NOT NULL,
    "created_at" TIME(6) NOT NULL,
    "updated_at" TIME(6),
    "deleted_at" TIME(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_activities" ADD CONSTRAINT "members_activities_id_activity_fkey" FOREIGN KEY ("id_activity") REFERENCES "activities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_activities" ADD CONSTRAINT "members_activities_id_member_fkey" FOREIGN KEY ("id_member") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_group" ADD CONSTRAINT "members_group_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_group" ADD CONSTRAINT "members_group_id_member_fkey" FOREIGN KEY ("id_member") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
