"use client";

import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Uploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    console.log(fileRejections);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected, //call whenever drop is rejected
    maxFiles: 5,
    maxSize: 1024 * 1024 * 5, //bytes = 5MB
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors bg-gray-950 text-gray-200 duration-200 ease-in-out w-full h-64",
      )}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <div className="flex flex-col justify-center items-center h-fu w-full gap-3">
          <p>Drag 'n' and drop some files here, or click to select files</p>
          <Button>Select files</Button>
        </div>
      )}
    </Card>
  );
}
