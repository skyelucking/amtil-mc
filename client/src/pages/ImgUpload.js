import React, { useState } from 'react'
import '../App.css'

export default function ImgUpload (){
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'amtilunsigned')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/amtil/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="container" >
      <div className="inputBox" >
    
      <h3>Upload Image</h3>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '150px' }} /> 
      )}
      <div>Image URL: {image}</div>
    </div>
    </div>
  )
}










