import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { QuizEntity } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'carrace@123',
    database: 'quiz',
    synchronize: true,   // only in dev - Not in Prod
    entities: [QuizEntity]
}