import { Injectable } from "@nestjs/common";
import { Prisma, users } from "@prisma/client";
import { PrismaService } from "src/modules/database/services/PrismaService.database.service";
import UserType from "../../domain/types/UserType.user.type";

@Injectable()
export default class CreateUserProvider {
    private repository: Prisma.usersDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().users
    }
    private newUser: UserType
    private newManyUser: UserType[]

    // Setters
    public setNewUser(user: UserType){
        this.newUser = user;
        return this;
    }

    public setNewManyUser(users: UserType[]){
        this.newManyUser = users;
        return this;
    }

    public getNewManyUser(){
        const users = this.newManyUser.map((user)=>{
            delete user.password
            return user;
        })
        return users;
    }

    //============================================

    /**
     * Realizar a criação de apenas um usuário
     */
    public async one(){
        try {
            if(this.newUser == null){
                throw new Error('Defina um usuário para realizar o seu cadastro')
            }
            this.newUser['created_at'] = new Date()
            const newUser = this.newUser as users;

           const user =  await this.repository.create({data: newUser,select:{
                name: true,
                email: true,
                id: true,
                deleted_at: false,
                created_at: false,
                updated_at: false,
                password: false
            }});

            return user;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Realizar a criação de múltiplos usuários
     */
    public async many(){
        try {
            if(this.newManyUser == null){
                throw new Error('Defina os usuários que deseja cadastrar')
            }

            const newUsers = this.newManyUser.map((user)=>{
                user['created_at'] = new Date()
            }) as unknown as users[]

            await this.repository.createMany({data: newUsers});

            return this.getNewManyUser();

        } catch (error) {
            throw error;
        }
    }

}