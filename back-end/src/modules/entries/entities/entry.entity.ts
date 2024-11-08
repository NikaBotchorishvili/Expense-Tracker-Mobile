import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  //  This is going to be connected via foreign key relationship in future
  @Column({ type: 'varchar', length: 50 })
  category: string;

  @Column({ type: 'timestamp' })
  date: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  amount: number;

  @CreateDateColumn()
  createdAt: string;
}
