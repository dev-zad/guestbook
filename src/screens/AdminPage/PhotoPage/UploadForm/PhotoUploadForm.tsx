"use client";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "sonner";
import { Select } from "antd";

export default function PhotoUpload() {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [uploadCategory, setUploadCategory] = useState('catalyst');


  const [imageUrls, setImageUrls] = useState<string[]>(() => {
    // Try to load the image URLs from the local storage
    const savedUrls = localStorage.getItem('imageUrls');
    return savedUrls ? JSON.parse(savedUrls) : [];
  });

  useEffect(() => {
    console.log("Updated Image URLs:", imageUrls);
    // Save the image URLs in the local storage whenever they change
    localStorage.setItem('imageUrls', JSON.stringify(imageUrls));
  }, [imageUrls]);

  const handleUploadComplete = (uploadedFiles: any) => {
    const newUrls = uploadedFiles.map((file: any) => {
      return {
        url: file.url,
        category: uploadCategory,
      };
    });
    console.log("New URLs:", newUrls); // Debugging line
    // Save the URLs in the state
    setImageUrls((prevUrls) => [...prevUrls, ...newUrls]);
    setPreviewUrls(newUrls);
    toast.success("Upload Completed");
  };



  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div className="flex items-center justify-center mb-5">
          <Select defaultValue="catalyst" onChange={setUploadCategory}>
            <Select.Option value="catalyst">Catalyst</Select.Option>
            <Select.Option value="sunday">Sunday</Select.Option>
          </Select>
        </div>
        <Toaster />
      </div>
      {/* Preview the uploaded images*/}
      {/* <div>
        {previewUrls.map((url, index) => (
          <div key={index} className="relative w-48 h-48">
            <Image src={url} alt={`Preview Image ${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div> */}

    </div>
  );
}

