import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { ApiTags } from '@nestjs/swagger';


@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiTags('get')
  @Get()
  async findAll(): Promise<RoleEntity[]> {
    return this.roleService.findAll();
  }

  @ApiTags('get')
  @Get(':role_id')
  async findOne(@Param('role_id') role_id: number): Promise<RoleEntity> {
    return this.roleService.findOne(role_id);
  }

  @ApiTags('post')
  @Post()
  async create(@Body() role: RoleEntity): Promise<RoleEntity> {
    return this.roleService.create(role);
  }

  @ApiTags('put')
  @Put(':role_id')
  async update(@Param('role_id') role_id: number, @Body() updatedRole: RoleEntity): Promise<RoleEntity> {
    return this.roleService.update(role_id, updatedRole);
  }

  @ApiTags('delete')
  @Delete(':role_id')
  async delete(@Param('role_id') role_id: number): Promise<void> {
    return this.roleService.delete(role_id);
  }
}

    




