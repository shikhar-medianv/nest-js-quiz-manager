import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes')
export class QuizEntity {
    @PrimaryGeneratedColumn({
        comment: 'The Quiz unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string

    @Column({
        type: 'text',
    })
    description: string;
}