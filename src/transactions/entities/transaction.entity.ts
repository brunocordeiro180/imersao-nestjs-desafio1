import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: number;

    @Column()
    amount: number;

    @CreateDateColumn({ name: 'created_at' }) 
    createdAt: Date;
    
    @UpdateDateColumn({ name: 'updated_at' }) 
    updatedAt: Date;
}
