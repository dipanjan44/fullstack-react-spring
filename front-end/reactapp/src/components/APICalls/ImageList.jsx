import React from 'react'
import { generate as generateKey } from "short-id"

const ImageList = (props) => {
    
    // const images = props.images.map((image)=>{
    //     return <img src={image.urls.regular}/>
    // })

    // return(
    //     <div>
    //         {images}
    //     </div>
    // )

    return props.images.map((img) => <img key={generateKey()} src={img.urls.regular}/>)

}

export default ImageList
