import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TypeActionService } from './type-action.service';
import { TypeAction } from './type-action.entity';
import {ApiTags } from '@nestjs/swagger';

@Controller('type-actions')
export class TypeActionController {
  constructor(private readonly typeActionService: TypeActionService) {}

  @Get()
  async findAll(): Promise<TypeAction[]> {
    return this.typeActionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TypeAction> {
    return this.typeActionService.findOne(+id);
  }

  @Post()
  async create(@Body() typeAction: TypeAction): Promise<TypeAction> {
    return this.typeActionService.create(typeAction);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedTypeAction: TypeAction): Promise<TypeAction> {
    return this.typeActionService.update(+id, updatedTypeAction);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.typeActionService.delete(+id);
  }
}