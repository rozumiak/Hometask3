import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Stats {
  @PrimaryGeneratedColumn()
  totalNotes: number;

  @Column()
  totalActiveNotes: number;

  @Column()
  totalArchivedNotes: number;
}
