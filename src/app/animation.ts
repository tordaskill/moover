import { animate, state, transition, style, trigger, keyframes, animation } from "@angular/animations";



export const fade = 
trigger('startFade',[
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        animate(1000)
    ])
])


export let slide = trigger('startSlide', [

    transition(':enter', [
        style({ transform: 'translateX(+100px)' }),
        animate(500)
    ]),
    transition(':leave', [
      animate(500, style({transform: 'translateX(+100px)'
   }

      ))
      ]),
]
)


export let topslide = trigger('startSlide', [

    transition(':enter', [
        style({ transform: 'translateY(-1000px)',
        opacity: 0 }),
        animate(1000)
    ]),
    transition(':leave', [
      animate(1000, style({transform: 'translateY(-1000px)'}))
      ]),
]
)