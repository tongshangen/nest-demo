import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudModule } from './stud/stud.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['users/*.entity.ts'],
    }),
    TypeOrmModule.forRoot({
      name: 'test',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['stud/*.entity.ts'],
    }),
    UsersModule,
    StudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
