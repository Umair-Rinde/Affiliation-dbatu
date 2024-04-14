import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Affiliation } from './affiliation.model';
import { AffiliationController } from './affiliation.controller';
import { AffiliationService } from './affiliation.service';

@Module({
  imports: [SequelizeModule.forFeature([Affiliation])],
  controllers: [AffiliationController],
  providers: [AffiliationService],
  exports: [AffiliationService],
})
export class AffiliationModule {}
