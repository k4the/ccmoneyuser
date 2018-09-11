import { trigger, state, style, transition, animate, query, group } from '@angular/animations';

export const slideHeight = trigger('slideHeight', [
    state('open', style({
      position: 'relative',
      transform: 'translateY(0%)'
    })),
    state('closed', style({
      transform: 'translateY(-100%)'
    })),
    transition('closed <=> open', animate('300ms ease-in'))
]);
