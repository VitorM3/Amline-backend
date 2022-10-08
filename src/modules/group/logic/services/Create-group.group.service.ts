import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import GroupType from "../../domain/types/GroupType.group.type";
import CreateGroupProvider from "../providers/create-group.group.provider";

export class CreateGroupService extends Service<GroupType>{
    private newGroup: GroupType

    private readonly postProvider: CreateGroupProvider
    public constructor(){
        super()

        this.postProvider = new CreateGroupProvider()
    }

    setNewGroup(group: GroupType){
        this.newGroup = group;

        return this;
    }


    async execute(): Promise<GroupType | ErrorBaseError> {
        try {
            return await this.createGroup()
        } catch (error) {
            throw error
        }
    }

    private async createGroup(){
        try {
            return await this.postProvider
            .setGroup(this.newGroup)
            .one()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }


}