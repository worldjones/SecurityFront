import React, { useState } from 'react'

export const Fileupload = () => {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'worldjones' )
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/duahw59pn/image/upload',
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

        <div className="Fileupload">
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                accept="image/png, image/jpeg"
                placeholder="Upload an image"
                onChange={uploadImage}


            />
            {loading ? (
                <h3>Loading...</h3>
            ): (
                <img src={image} style={{width: '300px'}} />
            )} 

        </div>
    )

};

