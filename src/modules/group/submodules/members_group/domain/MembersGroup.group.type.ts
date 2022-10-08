import { members_group } from "@prisma/client";

type MembersGroupType = Omit<members_group,'created_at'| 'updated_at'| 'deleted_at'>

export default MembersGroupType