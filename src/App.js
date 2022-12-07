import React from "react";
import "./App.css";
import FileUpload from "./component/file-upload/FileUpload";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

function App() {
    return (<>
        <div className="App">
            <FileUpload />
        </div>
          <h3>To Add New User in the email/notification list. Please click on the below link to go to admin/user config page</h3>
          <a href="https://main.d3vjk7iwuexp5r.amplifyapp.com" target="_blank" rel="noopener noreferrer">Add User to Notification List</a>
        </>
    );
}

export default App;