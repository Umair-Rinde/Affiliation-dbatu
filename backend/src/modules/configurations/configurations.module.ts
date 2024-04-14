import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { HeadOfInstitutionModule } from './Head_of_Institution/headOfInstitution.module';

@Module({
  imports: [
    MetaDataModule,
    HeadOfInstitutionModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
