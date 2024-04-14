import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RTI } from './rti.model';
import { RTIController } from './rti.controller';
import { RTIService } from './rti.service';

@Module({
  imports: [SequelizeModule.forFeature([RTI])],
  controllers: [RTIController],
  providers: [RTIService],
})
export class RTIModule {}
