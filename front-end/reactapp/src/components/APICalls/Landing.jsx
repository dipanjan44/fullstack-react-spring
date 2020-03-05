import React, {PureComponent} from 'react'
import axios from 'axios'
import bindMethods from 'auto-bind'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class Landing extends PureComponent{
    state = {
        imageList: []
    }

    constructor(){
        super()
        bindMethods(this)
    }

    // extract to api utils method
    async fetchAllImages (searchTerm)
    {
        const response = await axios.get('https://api.unsplash.com//search/photos',{

            params :{ query: searchTerm

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
        const imageCount = this.state.imageList.length;

        return(
            <div>
                <SearchBar onsubmit={this.fetchAllImages}/>
                {/* {!!imageCount && <p>Found: {imageCount} images</p>}
                {!!imageCount && <ImageList images={this.state.imageList}/>} */}

                {
                    !!imageCount && <div>
                        <p>Found: {imageCount} images</p>
                        <ImageList images={this.state.imageList}/>
                    </div>
                }
            </div>
        )
    }
}
