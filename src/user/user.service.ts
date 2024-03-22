import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { FindOneOptions } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { PaginatedResult } from 'src/common/paginated-result.interface';

@Injectable()
export class UserService extends AbstractService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
    super(userRepository)
  }


  async pagninate(page = 1, relations = []): Promise<PaginatedResult> {

    const {data, meta } = await super.pagninate(page, relations)

    return {
      data: data.map(user => {
        const { password, ...data } = user
        return data
      }),
      meta
    }
  }



}
