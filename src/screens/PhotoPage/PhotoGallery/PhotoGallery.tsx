"use client";
import { Typography } from "@/components/Typography";
import { Image } from "antd";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PhotoUpload } from "../UploadForm/PhotoUploadForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export function PhotoGallery() {
  const [imageUrls, setImageUrls] = useState<{ url: string; category: string }[]>(() => {
    if (typeof window !== 'undefined') {
      const savedUrls = localStorage.getItem('imageUrls');
      return savedUrls ? JSON.parse(savedUrls) : [];
    } else {
      return [];
    }
  });

  const [checkedImages, setCheckedImages] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('imageUrls', JSON.stringify(imageUrls));
  }, [imageUrls]);

  const handleCheckboxChange = (url: string, checked: boolean) => {
    setCheckedImages(prevCheckedImages =>
      checked ? [...prevCheckedImages, url] : prevCheckedImages.filter(imageUrl => imageUrl !== url)
    );
  };

  const handleDeleteClick = () => {
    setImageUrls(prevImageUrls => prevImageUrls.filter(urlObject => !checkedImages.includes(urlObject.url)));
  };

  return (
    <div className="flex flex-col">
      <Typography variant="h1" className="flex items-start justify-start">Photo Gallery</Typography>
      <div className="py-2 gap-4 flex flex-row">
        <Button onClick={handleDeleteClick} disabled={checkedImages.length === 0}>Delete</Button>
        <div>
          <PhotoUpload />
        </div>
      </div>
      <Tabs defaultValue="catalyst">
        <div className="flex items-center justify-center">
          <TabsList  >
            <TabsTrigger value="catalyst">Catalyst MidWeek Break</TabsTrigger>
            <TabsTrigger value="sunday">Sunday Celebration</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="catalyst">
          <div className="grid grid-cols-4 flex-row gap-0 gap-y-10">
            {imageUrls
              .filter((image) => image.category === 'catalyst')
              .map((image, index) => (
                <div key={index} className="relative">
                  <Image.PreviewGroup
                    preview={{
                      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                  >
                    <Image src={image.url} alt={`Uploaded Image ${index}`} width={350} height={200}
                      className="bg-driftwood-200 shadow-md rounded-md hover:shadow-lg transition-shadow duration-200"

                    />
                    <input
                      type="checkbox"
                      style={{ position: 'absolute', top: '0', left: '0', transform: 'translate(-50%, -50%)', zIndex: 1 }}
                      onChange={e => handleCheckboxChange(image.url, e.target.checked)}
                    />
                  </Image.PreviewGroup>
                </div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="sunday">
          <div className="grid grid-cols-4 flex-row gap-0 gap-y-10">
            {imageUrls
              .filter((image) => image.category === 'sunday')
              .map((image, index) => (
                <div key={index} className="relative">
                  {/* ...rest of your code */}
                  <Image src={image.url} alt={`Uploaded Image ${index}`} width={350} height={200} />
                  {/* ...rest of your code */}
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
}
