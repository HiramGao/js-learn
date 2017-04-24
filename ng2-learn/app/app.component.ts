import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    private greeting: string;
    private isShowMore: boolean;
    private msgToChild: string;
    private msgFromChild: string;

    constructor(private logger:LoggerService) {
    }

    ngOnInit() {
        this.greeting = 'Hello Angular';
        this.msgToChild = 'message from parent';
        this.logger.debug('应用已初始化');
    }
    receive(msg:string){
        this.msgFromChild = msg;
    }
}