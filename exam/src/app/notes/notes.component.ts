import {Component, ElementRef, Renderer, ViewChild} from '@angular/core';
import {NoteService} from "./shared/note.service";
import {Note} from "./shared/note.model";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  @ViewChild('input') input: ElementRef;
  constructor(
    private renderer: Renderer,
    private noteService: NoteService
  ) { }

  addNote(body: string): void {
    if (body !== '') {
      this.noteService.addNote(new Note(body));
      this.renderer.setElementProperty(
        this.input.nativeElement, 'value', ''
      )
    }

  }

}
