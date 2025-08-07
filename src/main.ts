import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API NESTJS COM MONGODB')
    .setDescription('Api NestJs Com MongoDB')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const paths = Object.keys(document.paths).sort();
  const sortedPaths = {};
  paths.forEach((path) => {
    sortedPaths[path] = document.paths[path];
  });
  document.paths = sortedPaths;

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  await app.listen(3000);
}
bootstrap();
