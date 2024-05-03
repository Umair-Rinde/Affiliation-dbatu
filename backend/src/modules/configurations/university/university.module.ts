import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { University } from './university.model';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
  imports: [SequelizeModule.forFeature([University])],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
