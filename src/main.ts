import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './modules/database/services/PrismaService.database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Nagacabros')
    .setDescription('Documentação da API de agendamentos e gerenciamentos de atividades')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);
  //======================================================================================
  // Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  //======================================================================================
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
