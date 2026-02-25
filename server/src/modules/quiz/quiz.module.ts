import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
    controllers: [QuizController],
    providers: [QuizService]
})
export class QuizModule {
    getAllQuiz() {
        return [1, 2, 3]
    }
}
 