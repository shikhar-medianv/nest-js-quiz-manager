import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Controller('quiz')

export class QuizController {
    constructor(private quizService: QuizService) { }
    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post("/create")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    createQuiz(@Body() quizData: CreateQuizDto) { 
        return { data: quizData }
    }
    // @Get(":id")
    // getQuiz(@Param('id', ParseIntPipe) id: number) {
    //     return id
    // }

}