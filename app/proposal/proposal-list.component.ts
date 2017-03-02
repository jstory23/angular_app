import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC company', 'http://portfolio.jordanstory.com', 'Ruby on Rails', 150, 120, 15, 'jordan@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ company', 'http://portfolio.jordanstory.com', 'Ruby on Rails', 150, 120, 15, 'jordan@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'Something company', 'http://portfolio.jordanstory.com', 'Ruby on Rails', 150, 120, 15, 'jordan@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
