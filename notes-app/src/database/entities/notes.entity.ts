import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  category: string;

  @Column()
  content: string;

  @Column({ default: false })
  isArchived: boolean;
}



