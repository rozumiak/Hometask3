import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note, Stats } from '../../database/entities';
import { NoteSchema } from '../../common/schemas';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.notesService.getAllNotes();
  }
  @Get('stats')
  getNotesStats(): Stats {
    return this.notesService.getNotesStats();
  }

  @Get(':id')
  getNoteById(@Param('id', ParseIntPipe) id: number): Note {
    const note = this.notesService.getNoteById(id);
    if (!note) {
      throw new BadRequestException('note with specified id does not exist');
    }
    return note;
  }

  @Post()
  async createNote(@Body() note: Note): Promise<Note> {
    try {
      await NoteSchema.validate(note, { abortEarly: false });
    } catch (error) {
      throw new BadRequestException('Invalid request body');
    }

    return this.notesService.createNote(note);
  }

  @Patch(':id')
  async editNoteById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedNote: Note,
  ): Promise<Note> {
    try {
      await NoteSchema.validate(updatedNote, { abortEarly: false });
    } catch (error) {
      throw new BadRequestException('Invalid request body');
    }

    return this.notesService.editNoteById(id, updatedNote);
  }

  @Delete(':id')
  deletNoteById(@Param('id', ParseIntPipe) id: number): boolean {
    return this.notesService.deleteNoteById(id);
  }
}
