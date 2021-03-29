import React, {Component} from 'react';
import './SearchMovie.css'

class PageOption extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage : 1
        };

        this.selectPage = this.selectPage.bind(this);
    }

    render(){
        let pageNumber = Math.ceil(this.props.total/10);
        //console.log(pageNumber);
        let pageOptions = [];
        for(let i = 0; i < pageNumber; i++){
            pageOptions.push(<button className="page" onClick={this.selectPage.bind(this,i+1)} key={i}>{i+1}</button>)
        }
        return pageOptions;
    }

    selectPage(page){
        if(this.state.currentPage !== page){
            this.setState({
                currentPage : page
            });
            this.props.selectPage(page);
        }
    }

}

export default PageOption;