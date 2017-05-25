export class Note {
  id: number;
  constructor(public body: string) {
    this.id = Date.now();
  }
}
