import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Buka CORS biar CMS & Mobile bisa nembak API
  app.enableCors(); 

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('API Wisata Pahawang')
    .setDescription('Dokumentasi endpoint untuk booking trip')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Listen port
  await app.listen(3000, '0.0.0.0');
}
bootstrap();