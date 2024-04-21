import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionEntity } from './action.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @ApiTags('get')
  @Get()
  async findAll(): Promise<ActionEntity[]> {
    return this.actionService.findAll();
  }

  @ApiTags('get')
  @Get(':id')
  async findOne(@Param('action_id') action_id: number): Promise<ActionEntity> {
    return this.actionService.findOne(action_id);
  }

  @ApiTags('post')
  @Post()
  async create(@Body() action: ActionEntity): Promise<ActionEntity> {
    return this.actionService.create(action);
  }

  @ApiTags('put')
  @Put(':action_id')
  async update(@Param('action_id') action_id: number, @Body() updatedaction: ActionEntity): Promise<ActionEntity> {
    return this.actionService.updateAction(+action_id, updatedaction);
  }

  @ApiTags('delete')
  @Delete(':id')
  async delete(@Param('action_id') action_id: number): Promise<void> {
    return this.actionService.delete(+action_id);
  }
}
