import { Permission } from './permission.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';
export declare class PermissionService extends AbstractService {
    private readonly permissionRepostiory;
    constructor(permissionRepostiory: Repository<Permission>);
}
