import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://rayancarvalho:LhpjtY0FLxiDm6r8@cluster0.brrloy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' /*process.env.MONGODB_DATABASE_URL*/,
    ),
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
