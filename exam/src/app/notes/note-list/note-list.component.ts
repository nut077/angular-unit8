import { Component } from '@angular/core';
import {Note} from "../shared/note.model";
import {NoteService} from "../shared/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: Note[] = [];
  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
    //this.notes = this.noteService.getNotes();
  }


}
