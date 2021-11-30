import { Component } from "@angular/core";

@Component({
    template: '
        <div class="yashchenko">
            <span class="yashchenko-count">
                Count active = {{ countActive }};
            </span>
            <ul class="yashchenko-list">
                <li class="yashchenko-list-item"
                [ngClass]="{ 'active': item.isActive}"
                    *ngFor="let item of yashchenkos">
                    {{item.id}}
                </li>
            </ul>
        </div>
',
    styleUrls: ['./yashchenko.component.scss']
})
export class YashchenkoComponent {

    yashchenkos = [];
    countActive: number;

    constructor() {
        for (let i = 0; i < 1001; i++) {
            const random = Math.floor(Math.random() * Math.pow(10, 2));
            const isActive = random > 90;
            this.yashchenkos.push(new Yashchenko(`№ ${i};`, i, isActive));
        }
        this.countActive = this.yashchenkos.filter((item: Yashchenko) => item.isActive).length;
    }

}
class Yashchenko {
    constructor(
        public name: string,
        public id: number,
        public isActive: boolean,
    ) { }
}
