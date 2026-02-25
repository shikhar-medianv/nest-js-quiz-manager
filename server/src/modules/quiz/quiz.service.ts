import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizEntity } from "./quiz.entity";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Injectable({})
export class QuizService {
    constructor(
        @InjectRepository(QuizEntity)
        private quizRepository: Repository<QuizEntity>,
    ) { }
    async getAllQuiz() {
        return this.quizRepository.find();
    }

    async createQuiz(quizData: CreateQuizDto) {
        const quiz = this.quizRepository.create(quizData);
        return this.quizRepository.save(quiz);
    }
}
