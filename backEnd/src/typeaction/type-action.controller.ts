import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TypeActionService } from './type-action.service';
import { TypeAction } from './type-action.entity';
import { UpdatetypeActionDto } from './dto/update-type-action.dto';
import { CreateTypeActionDto } from './dto/create-type-action.dto';
import {ApiTags } from '@nestjs/swagger';

@Controller('type-actions')
@ApiTags('type-actions')
export class TypeActionController {
  constructor(private readonly typeActionService: TypeActionService) {}

  @Get()
  findAll(): Promise<TypeAction[]> {
    return this.typeActionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.typeActionService.findOne(+id);
  }

  @Post()
  create(@Body() typeAction: TypeAction) {
    return this.typeActionService.create(typeAction);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedTypeAction: TypeAction) {
    return this.typeActionService.update(+id, updatedTypeAction);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.typeActionService.delete(+id);
  }
}