import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './modules/database/services/PrismaService.database.service';
import {SwaggerTheme} from 'swagger-themes'
import * as cookieParser from 'cookie-parser'
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  // Config
  swaggerConfig(app)
  prismaConfig(app)
  cookieConfig(app)
  //======================================================================================
  await app.listen(process.env.PORT ?? 5000);
}

function swaggerConfig(app: INestApplication){
  const config = new DocumentBuilder()
    .setTitle('Amline-api')
    .setDescription('Documentação da API de agendamentos e gerenciamentos de atividades')
    .setVersion('0.2')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme('v3');
  const options = theme.getDefaultConfig('dark');
  SwaggerModule.setup('api/doc', app, document,options);
}

async function prismaConfig(app: INestApplication){
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
}

function cookieConfig(app: INestApplication){
  const cookie = cookieParser()
  app.use(cookie)
}

bootstrap();
