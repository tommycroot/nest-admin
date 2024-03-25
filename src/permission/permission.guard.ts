import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { RoleService } from '../role/role.service';
import { User } from 'src/user/models/user.entity';
import { Role } from 'src/role/role.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
    private userService: UserService,
    private roleService: RoleService
    ){

  }
 async canActivate(
    context: ExecutionContext){
    const access = this.reflector.get<string>('access', context.getHandler())
    if(!access) {
      return true
    }

    const request = context.switchToHttp().getRequest()
    const id = await this.authService.userId(request)
    const user: User = await this.userService.findOneById(id, ['role'])
    const role: Role = await this.roleService.findOneById(user.role.id, ['permissions'])
    
    if (request.method === 'GET'){
      return role.permissions.some(p => (p.name === `view_${access}`) || (p.name === `edit_${access}`))
    }

    console.log(role)
    return role.permissions.some(p => p.name === `edit_${access}`)
  }
}
