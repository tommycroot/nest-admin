import { AbstractService } from 'src/common/abstract.service';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { PaginatedResult } from 'src/common/paginated-result.interface';
export declare class OrderService extends AbstractService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    pagninate(page?: number, relations?: any[]): Promise<PaginatedResult>;
    chart(): Promise<any>;
}
