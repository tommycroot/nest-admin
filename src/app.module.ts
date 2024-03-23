import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [ 
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'admin',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    CommonModule,
    PermissionModule,
    RoleModule,
    ProductModule,
    OrderModule,
  ]
})
export class AppModule { }
