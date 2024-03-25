import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { HasPermission } from 'src/permission/has-permission.decorator';


@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {

  }
  
  @Get()
  @HasPermission('roles')
  async all() {
    return this.roleService.all()
  }

  
  @Post()
  @HasPermission('roles')
  async create(
    @Body('name') name: string,
    @Body('permissions') ids: number[]
  ) {
    /*
    [1, 2]

    [
      {id: 1}, {id: 2}
    ]
    */
    return this.roleService.create({
      name,
      permissions: ids.map(id => ({id}))
    })
  }

  @Get(':id')
  async get(@Param('id') id: number) { 
    return this.roleService.findOneById(id, ['permissions'] )
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('permissions') ids: number[]
  ) {
    await this.roleService.update(id, {name})
    const role = await this.roleService.findOneById(id)

    return this.roleService.create({
      ...role,
      permissions: ids.map(id => ({id}))
    })
  }

  @HasPermission('roles')
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.roleService.delete(id)
  }

}
