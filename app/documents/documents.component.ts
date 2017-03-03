import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'This and that description',
      file_url: 'http://google.com',
      updated_at: '03/02/17',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/320px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'My Second Doc',
      description: 'This and that description',
      file_url: 'http://google.com',
      updated_at: '03/02/17',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/320px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'My Last Doc',
      description: 'This and that description',
      file_url: 'http://google.com',
      updated_at: '03/02/17',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/320px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
