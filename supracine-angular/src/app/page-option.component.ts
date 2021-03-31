import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'page-option',
    templateUrl: './page-option.component.html',
    styleUrls: ['./search-movie.component.css']
})

export class PageOption implements OnChanges{
    @Input() total : number = 0;
    @Output() setCurrentPage = new EventEmitter();

    currentPage = 1;
    pageOption : Array<number> = [];

    ngOnChanges(){
        let totalPage = Math.ceil(this.total/10);
        this.pageOption = Array(totalPage).fill(null).map((x,i)=>i+1)
    }

    selectPage(page: number){
        if(this.currentPage !== page){
            this.setCurrentPage.emit(page);
            this.currentPage = page;
        }
    }
}