import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { RedisModule } from 'src/common/modules/redis.module';
import { AppCacheModule } from 'src/common/modules/cache.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { PersonnelModule } from '../personnel/personnel.module';
import { DoctorModule } from '../doctor/doctor.module';
import { AttendanceModule } from '../attendance/attendance.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule.forRootAsync(),
    AppCacheModule,
    AuthModule,
    PersonnelModule,
    DoctorModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
