import { EventEmitter } from '@angular/core';

interface WikiLink {
  link: string;
  text: string;
}

interface DocLink {
  link: string;
  text: string;
  icon: string;
}

export interface GlobalLinkPanel {
  wikiLink: EventEmitter<WikiLink[]>;
  docLink: EventEmitter<DocLink[]>;
  workItemLink: EventEmitter<any>;
  close?: EventEmitter<any>;
  autoClose?: boolean;
}
