import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config/config';
import { EntriesModule } from './modules/entries/entries.module';
import { Entry } from './modules/entries/entities/entry.entity';
Entry
@Module({
  imports: [
    EntriesModule,
    TypeOrmModule.forRoot({
      ...Config,
      type: 'postgres',
      synchronize: true,
      logging: true,
      entities: [Entry],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
