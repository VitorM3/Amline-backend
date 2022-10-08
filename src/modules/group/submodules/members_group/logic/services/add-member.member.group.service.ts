import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import MembersGroupType from "../../domain/MembersGroup.group.type";
import CreateMemberGroupProvider from "../providers/create-members-group.provider";

export class AddMemberInGroupService extends Service<MembersGroupType[]>{
    private newMembersIdAdmin: number[]
    private newMembersIdDefault: number[]
    private groupId: number;

    private readonly createRepository: CreateMemberGroupProvider
    public constructor(){
        super();
        this.createRepository = new CreateMemberGroupProvider()
    }

    setNewMembersIdAdmin(ids: number[]){
        this.newMembersIdAdmin = ids;

        return this;
    }

    setNewMembersIdDefault(ids: number[]){
        this.newMembersIdDefault = ids;

        return this;
    }

    setGroupId(id:number){
        this.groupId = id;

        return this;
    }

    public async  execute(): Promise<MembersGroupType[] | ErrorBaseError> {
        try {
            return this.addMemberInGroup()
        } catch (error) {
            throw error;
        }
    }

    private async addMemberInGroup(){
        try {
            return await this.createRepository
            .setIdGroup(this.groupId)
            .setIdsMembersAdmin(this.newMembersIdAdmin)
            .setIdsMemberDefault(this.newMembersIdDefault)
            .one()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}