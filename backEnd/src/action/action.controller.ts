import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionEntity } from './action.entity';
import { UpdateActionDto } from './dto/update-action.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateActionDto } from './dto/create-action.dto';

@Controller('action')
@ApiTags('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

 
  @Get()
  findAll(): Promise<ActionEntity[]> {
    return this.actionService.findAll();
  }

  @Get(':id')
  findOne(@Param('action_id') action_id: number) {
    return this.actionService.findOne(action_id);
  }

 
  @Post()
  create(@Body() action: ActionEntity) {
    return this.actionService.create(action);
  }

  
  @Put(':action_id')
  update(@Param('action_id') action_id: number, @Body() updatedaction: ActionEntity){
    return this.actionService.updateAction(+action_id, updatedaction);
  }

  @ApiTags('delete')
  @Delete(':id')
  delete(@Param('action_id') action_id: number){
    return this.actionService.delete(+action_id);
  }
}
