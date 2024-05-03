import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { HeadOfInstitutionModule } from './Head_of_Institution/headOfInstitution.module';
import { RTIModule } from './RTI/rti.module';
import { AffiliationModule } from './Affiliation/affiliation.module';
import { FacultyModule } from './Faculty/faculty.module';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [
    MetaDataModule,
    HeadOfInstitutionModule,
    RTIModule,
    AffiliationModule,
    FacultyModule,
    UniversityModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
