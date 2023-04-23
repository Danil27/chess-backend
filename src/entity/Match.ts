import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Match {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'player_id', type: 'int4' })
    playerId: number;

    @Column({ type: 'text' })
    move: string;
}
