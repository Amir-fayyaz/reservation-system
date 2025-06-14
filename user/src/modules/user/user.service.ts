import { Injectable, NotFoundException, Scope } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, PaginateQuery } from 'nestjs-paginate';

@Injectable({ scope: Scope.DEFAULT })
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll(params: PaginateQuery) {
    return paginate(params, this.userRepository, {
      sortableColumns: ['createdAt'],
      defaultSortBy: [['createdAt', 'DESC']],
      searchableColumns: ['phone', 'email'],
      select: [
        'id',
        'createdAt',
        'updatedAt',
        'firstname',
        'lastname',
        'email',
        'nationalCode',
        'avatar',
        'fathername',
      ],
      filterableColumns: {
        phone: [FilterOperator.EQ],
        email: [FilterOperator.EQ],
      },
    });
  }

  async findOneById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    return user;
  }
}
