import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideIn = trigger('slideIn', [
    state('closed', style({
        width: '0%'
    })),
    state('open', style({
        width: '100%'
    })),
    transition('open <=> closed', animate('300ms ease-in'))
]);
