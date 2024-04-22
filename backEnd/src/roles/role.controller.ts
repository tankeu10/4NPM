import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';

import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';


@Controller('role')
@ApiTags('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  
  @Get()
  findAll() {
    return this.roleService.findAll();
  }

 
  @Get(':role_id')
  findOne(@Param('role_id') role_id: number) {
    return this.roleService.findOne(role_id);
  }

  @Post()
  create(@Body() role: RoleEntity) {
    return this.roleService.create(role);
  }

  @Put(':role_id')
  update(@Param('role_id') role_id: number, @Body() updatedRole: RoleEntity) {
    return this.roleService.update(role_id, updatedRole);
  }

  
  @Delete(':role_id')
  delete(@Param('role_id') role_id: number) {
    return this.roleService.delete(role_id);
  }
}

    




