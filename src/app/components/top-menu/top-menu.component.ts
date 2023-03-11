import { Component, OnInit } from '@angular/core';
import { ILink } from './link.interface';
import { links } from './links';


@Component({
  
  selector: 'orb-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public links: ILink[] = links;

  constructor() { }

  ngOnInit(): void {
  }

}
