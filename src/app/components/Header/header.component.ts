import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit  {
    constructor(
        private route: ActivatedRoute
    ) { };

    ngOnInit() {
        // this.route.paramMap.subscribe(
        //     (params: ParamMap) => {
        //         console.log(params.get('name'));
        //     }
        // )
    };
}