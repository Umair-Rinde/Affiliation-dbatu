import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { HeadOfInstitutionModule } from './Head_of_Institution/headOfInstitution.module';
import { RTIModule } from './RTI/rti.module';
import { AffiliationModule } from './Affiliation/affiliation.module';

@Module({
  imports: [
    MetaDataModule,
    HeadOfInstitutionModule,
    RTIModule,
    AffiliationModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
