import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import axios from 'axios';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform
);

export default function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleProcess = (fieldName, file, metadata, load, error, progress, abort) => {
    const formData = new FormData();
    formData.append('file', file);
   // formData.append('fileType', file.type);

    axios({
      method: "post",
      url: "http://localhost:5000/documents/upload-pdf",
      mode: "no-cors",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        console.log(response);
        load(file); // Signal that the file has been successfully uploaded
      })
      .catch(err => {
        console.error(err);
        error('Error uploading file'); // Signal that an error occurred during upload
      });

    return {
      abort: () => {
        // Handle file upload abort
        abort();
      }
    };
  };

  return (
    <div className="App">
      <FilePond
        className="w-[400px] h-[120px] cursor-pointer"
        files={files}
        onupdatefiles={setFiles}
        instantUpload={false}
        allowMultiple={false}
        maxFiles={1}
        server={{
          process: handleProcess // Pass the custom process function
        }}
        name="files"
        labelIdle='
            <br /> <br />
            <img
              src="/uploadDocument.svg"
              alt="Upload Folder Icon"
              style={{ width: "50px", height: "90px" }} 
            />
            <br />
            Drag & Drop your files or <span className="filepond--label-action font-bold">Browse</span>'
      />
    </div>
  );
}
