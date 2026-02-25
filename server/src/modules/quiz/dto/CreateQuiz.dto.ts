import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({ message: "The Quiz should have a Title" })
    @Length(3, 255)
    title: string;

    @IsNotEmpty({ message: "The Quiz should have a Description" })
    @Length(3, 200)
    description: string;
}