import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(): Promise<RoleEntity[]> {
    return this.roleService.findAll();
  }

  @Get(':role_id')
  async findOne(@Param('role_id') role_id: number): Promise<RoleEntity> {
    return this.roleService.findOne(role_id);
  }

  @Post()
  async create(@Body() role: RoleEntity): Promise<RoleEntity> {
    return this.roleService.create(role);
  }

  @Put(':role_id')
  async update(@Param('role_id') role_id: number, @Body() updatedRole: RoleEntity): Promise<RoleEntity> {
    return this.roleService.update(role_id, updatedRole);
  }

  @Delete(':role_id')
  async delete(@Param('role_id') role_id: number): Promise<void> {
    return this.roleService.delete(role_id);
  }
}

    




