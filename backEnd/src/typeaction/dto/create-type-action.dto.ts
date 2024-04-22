import { ApiProperty, ApiTags } from "@nestjs/swagger";


export class CreateTypeActionDto {
@ApiProperty()
    typ_id: number;
@ApiProperty()
    name: string;
    
}