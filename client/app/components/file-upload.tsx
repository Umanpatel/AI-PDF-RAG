"use client";
import React from "react";
import { Upload } from "lucide-react";

const FileUploadComponent: React.FC = () => {
  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "application/pdf");
    input.addEventListener("change", async (event) => {
      if(input.files && input.files.length > 0){
        const file = input.files.item(0);
        
        // if file exists and is not null we can append it to the form data
        // and send it to the server
        // we can use the fetch API to send the file to the server
        if(file){
          const formData = new FormData();
          formData.append('pdf',file )
          await fetch('http://localhost:8000/upload/pdf', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          })
          console.log('File uploaded successfully');
        }
      }
    })
    input.click();

    // if user selects a file, what happens?
    // we have to add event listener to the input element

  };

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white shadow-xl flex justify-center items-center h-24 w-52 rounded-3xl hover:from-indigo-600 hover:to-purple-700 hover:scale-105 transform transition-all duration-200 ease-in-out cursor-pointer border border-transparent hover:border-black">
      <div
        onClick={handleFileUpload}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h3 className="font-semibold text-lg tracking-wide">Upload PDF File</h3>
        <Upload className="w-6 h-6 hover:animate-bounce" />
      </div>
    </div>
  );
};

export default FileUploadComponent;
