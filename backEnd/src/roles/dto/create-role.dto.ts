import { ApiProperty } from "@nestjs/swagger";
export class CreateRoleDto {
@ApiProperty()

    readonly role_id: number;
@ApiProperty()

    readonly name: string;

}