import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { AbstractService } from 'src/common/abstract.service';
import { PaginatedResult } from 'src/common/paginated-result.interface';
export declare class UserService extends AbstractService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    pagninate(page?: number, relations?: any[]): Promise<PaginatedResult>;
}
