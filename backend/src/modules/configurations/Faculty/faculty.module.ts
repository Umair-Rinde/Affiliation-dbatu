import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Faculty } from './faculty.model';
import { FacultyController } from './faculty.controller';
import { FacultyService } from './faculty.service';

@Module({
  imports: [SequelizeModule.forFeature([Faculty])],
  controllers: [FacultyController],
  providers: [FacultyService],
})
export class FacultyModule {}
 