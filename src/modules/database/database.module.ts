import { Module } from "@nestjs/common";
import { PrismaService } from "./services/PrismaService.database.service";

@Module({
    providers:[PrismaService],
    exports:[PrismaService]
})
export default class DatabaseModule{}