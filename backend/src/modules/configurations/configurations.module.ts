import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { HeadOfInstitutionModule } from './Head_of_Institution/headOfInstitution.module';
import { RTIModule } from './RTI/rti.module';
import { AffiliationModule } from './Affiliation/affiliation.module';
import { FacultyModule } from './Faculty/faculty.module';

@Module({
  imports: [
    MetaDataModule,
    HeadOfInstitutionModule,
    RTIModule,
    AffiliationModule,
    FacultyModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
