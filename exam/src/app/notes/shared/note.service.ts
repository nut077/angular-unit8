import { Injectable } from '@angular/core';
import {Note} from "./note.model";

@Injectable()
export class NoteService {
  notes: Note[] = [];

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(id): void {
    const index = this.notes.findIndex(note => note.id === id);
    this.notes.splice(index, 1);
  }
}
