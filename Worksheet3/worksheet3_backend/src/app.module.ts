import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { ConfigModule } from '@nestjs/config';


const DB_URI = 
'mongodb+srv://larsjbosales:Kitkat123@cluster0.xxt9o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
