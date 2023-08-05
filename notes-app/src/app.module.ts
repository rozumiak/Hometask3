import { Module } from '@nestjs/common';
import { NotesModule } from './components/notes/notes.module';

@Module({
  imports: [NotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
