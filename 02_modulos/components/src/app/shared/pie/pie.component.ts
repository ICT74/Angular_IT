import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie',
    template: `
    <footer>
        <p>{{autor}} - {{empresa}}</p>
    </footer>
    `,
    styles: [`footer{
        //position: fixed;
        //bottom: 0;
        width: 100%;
        border-top: 1pxpapayawhip solid;
        padding: 1em;
    }
    p{
        text-align: center;
        font-size: S0.9em;
        color: papayawhip;
        margin: 0.5em
    }`]
})

export class PieComponent implements OnInit {
    public autor: string;
    public empresa: string;

    constructor() { }

    ngOnInit() {
        this.autor = 'ICT';
        this.empresa = 'ICA' ;
    }
}
