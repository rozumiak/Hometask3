import { Injectable } from '@nestjs/common';
import { Note, Stats } from '../../database/entities';

@Injectable()
export class NotesService {
  private notes: Note[] = [
    {
      id: Date.now() + 1,
      name: 'Shopping list',
      date: '20-03-2021',
      category: 'Task',
      content: 'Tomatoes,bread',
      isArchived: false,
    },
    {
      id: Date.now() + 2,
      name: 'The theory',
      date: '27-03-2021',
      category: 'Random thought',
      content: 'Evolution',
      isArchived: false,
    },
    {
      id: Date.now() + 3,
      name: 'New Feature',
      date: '05-05-2021',
      category: 'Idea',
      content: 'Implement new feature on the 07.05.2021',
      isArchived: false,
    },
    {
      id: Date.now() + 4,
      name: 'William Gaddis',
      date: '07-03-2021',
      category: 'Idea',
      content: 'You shell not pass',
      isArchived: false,
    },
    {
      id: Date.now() + 5,
      name: 'Books',
      date: '15-05-2021',
      category: 'Task',
      content: 'Learn new language',
      isArchived: false,
    },
    {
      id: Date.now() + 6,
      name: 'Go in bar',
      date: '20-07-2021',
      category: 'Random thought',
      content: 'Drink',
      isArchived: false,
    },
    {
      id: Date.now() + 7,
      name: 'Take a shower',
      date: '21-02-2021',
      category: 'Random thought',
      content: 'Oh, yeah',
      isArchived: false,
    },
  ];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: number): Note {
    return this.notes.find((note) => note.id === id);
  }

  getNotesStats(): Stats {
    // Розрахунок статистики на основі наявних нотаток
    const notes = this.getAllNotes();
    const totalNotes = notes.length;
    const totalArchivedNotes = notes.filter((note) => note.isArchived).length;
    const totalActiveNotes = totalNotes - totalArchivedNotes;

    // Повернення результату статистики
    return {
      totalNotes,
      totalActiveNotes,
      totalArchivedNotes,
    };
  }

  editNoteById(id: number, updatedNote: Note): Note {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return null;

    this.notes[index] = { id, ...updatedNote };
    return this.notes[index];
  }

  deleteNoteById(id: number): boolean {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return false;

    this.notes.splice(index, 1);
    return true;
  }

  createNote(note: Note): Note {
    const newNote: Note = { id: Date.now(), ...note };
    this.notes.push(newNote);
    return newNote;
  }
}
