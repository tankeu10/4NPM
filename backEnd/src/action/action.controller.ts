import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionEntity } from './action.entity';

@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get()
  async findAll(): Promise<ActionEntity[]> {
    return this.actionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('action_id') action_id: number): Promise<ActionEntity> {
    return this.actionService.findOne(action_id);
  }

  @Post()
  async create(@Body() action: ActionEntity): Promise<ActionEntity> {
    return this.actionService.create(action);
  }

  @Put(':action_id')
  async update(@Param('action_id') action_id: number, @Body() updatedaction: ActionEntity): Promise<ActionEntity> {
    return this.actionService.updateAction(+action_id, updatedaction);
  }

  @Delete(':id')
  async delete(@Param('action_id') action_id: number): Promise<void> {
    return this.actionService.delete(+action_id);
  }
}
