import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import ImageList from './ImageList'

export default class Landing extends React.Component{
    state = {
        imageList: []
    }

    fetchallImages = async (term) =>
    {
        const response = await axios.get('https://api.unsplash.com//search/photos',{

            params :{ query: term

            },
            headers :{
                Authorization: 'Client-ID TDVWDjVPh_4seJvydilHnHZomF7RqvDI7lJr2XqECGE'
            }

        })

        console.log(response.data.results.length)

        this.setState({
            imageList: response.data.results
        })

    }

    render() {

        return(
            <div>
                <SearchBar onsubmit={this.fetchallImages}/>
                Found: {this.state.imageList.length} images
                <ImageList images={this.state.imageList}/>
            </div>
        )
    }
}
