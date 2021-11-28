export const Fileupload = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>File page</h1>
                <p>This page contains all fileuploads</p>
                <h1>Upload a picture!</h1>





                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg"></input>

                    <h1></h1>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </div>

    );


};