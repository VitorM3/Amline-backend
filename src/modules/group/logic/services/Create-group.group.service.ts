import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import getRanHex from "src/shared/utils/GenerateHexaDecimal";
import GroupType from "../../domain/types/GroupType.group.type";
import CreateGroupProvider from "../providers/create-group.group.provider";

export class CreateGroupService extends Service<GroupType>{
    private newGroup: Omit<GroupType,'code'>

    private readonly postProvider: CreateGroupProvider
    public constructor(){
        super()

        this.postProvider = new CreateGroupProvider()
    }

    setNewGroup(group: Omit<GroupType,'code'>){
        this.newGroup = group;

        return this;
    }


    async execute(): Promise<GroupType | ErrorBaseError> {
        try {
            const newGroup = this.addCode(this.newGroup)
            return await this.createGroup(newGroup)
        } catch (error) {
            throw error
        }
    }

    private addCode(group: Omit<GroupType,'code'>){
        try {
            const newGroup: GroupType = {
                id: undefined,
                name: group.name,
                code: getRanHex(12)
            };

            return newGroup;
        } catch (error) {
            throw error;
        }
    }

    private async createGroup(group: GroupType){
        try {
            return await this.postProvider
            .setGroup(group)
            .one()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }


}