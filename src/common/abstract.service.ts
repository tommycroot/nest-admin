import { Injectable } from '@nestjs/common';
import { User } from 'src/user/models/user.entity';
import { Repository } from 'typeorm';
import { PaginatedResult } from './paginated-result.interface';

@Injectable()
export abstract class AbstractService {

  protected constructor(
    protected readonly repository: Repository<any>
  ) {
  }


  async all(relations = []): Promise<any[]> {
    return this.repository.find({relations})
  }

  async pagninate(page = 1, relations = []): Promise<PaginatedResult> {
    const take = 15
    const [data, total] = await this.repository.findAndCount({
      take,
      skip: (page - 1) * take,
      relations
    })

    return {
      data: data,
      meta: {
        total,
        page,
        last_page: Math.ceil(total / take)
      }
    }
  }


  async create(data): Promise<any> {
    return this.repository.save(data)
  }

  async findOne(email: string): Promise<any> {
    return this.repository.findOne({ where: { email }})
  }

  async findOneById(id: number, relations = []): Promise<any> {
    return this.repository.findOne({ where: {id}, relations })
  }

  async update(id: number, data): Promise<any> {
    return this.repository.update(id, data)
  }

  async delete(id: number): Promise<any> {
    return this.repository.delete(id)
  }
}

