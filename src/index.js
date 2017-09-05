import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar.js' 
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
// Create a new component This component should produce 
// some HTML 
const API_KEY = 'AIzaSyDkMywKoVvji2ZUMWLxQBvqHVLhvLh5jH4'
// 

// 


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'},(videos)=> {
      this.setState({videos});
    });
  }
  
  render(){
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}



//  Take this component's generated HTML and put it
//  on the page 
ReactDOM.render(<App/>,document.querySelector('.container'));