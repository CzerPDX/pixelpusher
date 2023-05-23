import React, { useState } from 'react';

const UploadUI = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Updates selected file when user selects a file from their operating system
  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  // Handle the upload of the 
  function handleUpload() {
    if (selectedFile) {
      console.log(`Preparing to upload ${selectedFile.name}`);
      // Eventually we will add code to actually upload to the endpoint here
    } else {
      console.log('No file selected');
    }
  }

  return (
    <div className="UploaderUI">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && <div>{selectedFile.name}</div>}
    </div>
  );
}

export default UploadUI;