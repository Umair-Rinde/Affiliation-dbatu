import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeadOfInstitution } from './headOfInstituion.model';
import { HeadOfInstitutionController } from './headOfInstitution.controller';
import { HeadOfInstitutionService } from './headOfInstitution.service';

@Module({
  imports: [SequelizeModule.forFeature([HeadOfInstitution])],
  controllers: [HeadOfInstitutionController],
  providers: [HeadOfInstitutionService],
  exports: [HeadOfInstitutionService],
})
export class HeadOfInstitutionModule {}
