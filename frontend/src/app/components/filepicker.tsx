"use client";

import { useFilePicker } from "use-file-picker";
import React from "react";
import Filecard from "./filecard";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

async function fetchData(file: any){
  try{
      const response = await fetch("https://msl2asra3d.execute-api.us-west-1.amazonaws.com/prod/", {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      body: file
    });

    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data
  }
  catch (error){
    console.log("Error is ", error);
    throw error;
  }
}

export default function Filepicker() {
  const { openFilePicker, filesContent, loading, plainFiles} = useFilePicker({
    accept: [".mp4", ".mp3", ".wav", ".flac"],
    readAs: "BinaryString"
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if(filesContent.length > 0){
    fetchData(filesContent[0].content);
  }
  return (
    <>
      {filesContent.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center border-4 border-sky-300 rounded-md p-4 w-3/4 aspect-video my-4 border-dashed ">
            <>
              <div className="text-xl font-extrabold text-center">
                Drag and Drop Video Here to Start
              </div>
              <div className="text-xl font-extrabold text-center text-sky-300">
                - Or -
              </div>
              <button
                onClick={() => openFilePicker()}
                className="bg-sky-400 text-white font-semibold py-2 px-4 rounded-md"
              >
                Browse Files
              </button>
            </>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-semibold text-center">
              Max File Size: 1GB
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="underline font-semibold text-sky-300">
                Sign Up
              </div>
              &nbsp; for more
            </div>
          </div>
        </div>
      )}
      {filesContent.length !== 0 && (
        <div className="flex flex-col shadow-lg p-2 rounded-md">
          <div className="flex flex-col justify-center items-center">
            {filesContent.map((file, index) => (
              <Filecard
                key={index}
                name={file.name}
                size={(file.size / (1024 * 1024)).toFixed(2)}
              />
            ))}

          </div>
          <div className="flex justify-end">
            <button className="flex flex-row font-bold text-2xl rounded-md text-sky-50 bg-sky-400 p-4 my-2 justify-center items-center">
              Convert
              <ArrowRightIcon className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
