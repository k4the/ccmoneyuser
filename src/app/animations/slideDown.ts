import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideDown = trigger('slideDown', [
    state('closed', style({
        top: '*'
    })),
    state('open', style({
        top: '0'
    })),
    transition('closed <=> open', animate('300ms ease-in'))
]);
