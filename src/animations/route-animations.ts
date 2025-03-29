import { trigger, transition, style, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate(
      '400ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);

export const routeTransitionAnimationsBottomTop = trigger('bottomTop', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '350ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);

export const fadeBlurAnimation = trigger('fadeBlur', [
  transition(':enter', [
    style({ opacity: 0, filter: 'blur(10px)' }), // Start: Invisible & Blurred
    animate('0.6s ease-out', style({ opacity: 1, filter: 'blur(0px)' })), // End: Visible & Clear
  ]),
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }), // Start: Invisible
    animate('0.3s ease-out', style({ opacity: 1 })), // End: Fully Visible
  ]),
]);
