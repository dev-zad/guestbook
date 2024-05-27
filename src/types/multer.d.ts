// types/multer.d.ts
declare module 'multer' {
  import { RequestHandler, Request } from 'express';

  interface StorageEngine {
    _handleFile(req: Request, file: any, callback: (error?: any, info?: { path?: string; size?: number }) => void): void;
    _removeFile(req: Request, file: any, callback: (error: Error) => void): void;
  }

  interface DiskStorageOptions {
    destination?: string | ((req: Request, file: any, callback: (error: Error | null, destination: string) => void) => void);
    filename?: (req: Request, file: any, callback: (error: Error | null, filename: string) => void) => void;
  }

  export function diskStorage(options: DiskStorageOptions): StorageEngine;

  interface MulterOptions {
    storage?: StorageEngine;
    limits?: {
      fieldNameSize?: number;
      fieldSize?: number;
      fields?: number;
      fileSize?: number;
      files?: number;
      parts?: number;
      headerPairs?: number;
    };
    fileFilter?: (req: Request, file: any, callback: (error: Error | null, acceptFile: boolean) => void) => void;
  }

  interface Multer {
    (options?: MulterOptions): RequestHandler;
    single(name: string): RequestHandler;
    array(name: string, maxCount?: number): RequestHandler;
    fields(fields: { name: string; maxCount?: number }[]): RequestHandler;
    none(): RequestHandler;
    any(): RequestHandler;
  }

  const multer: Multer;
  export = multer;
}
