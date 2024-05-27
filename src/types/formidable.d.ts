// import { IncomingMessage, IncomingHttpHeaders } from 'http';
// import { EventEmitter } from 'events';

// declare module 'formidable' {
//   interface Fields {
//     [fieldName: string]: string | string[] | undefined;
//   }

//   interface Files {
//     [fieldName: string]: File | File[] | undefined;
//   }

//   interface File {
//     size: number;
//     path: string;
//     name: string;
//     type: string;
//     lastModifiedDate?: Date;
//     hash?: string | undefined;
//     toJSON: () => object;
//   }

//   interface IncomingFormOptions {
//     uploadDir?: string;
//     keepExtensions?: boolean;
//     maxFieldsSize?: number;
//     maxFields?: number;
//     hash?: string | false;
//     multiples?: boolean;
//     type?: 'multipart' | 'urlencoded';
//     bytesExpected?: number;
//     bytesReceived?: number;
//     encoding?: string;
//     headers?: IncomingHttpHeaders;
//     size?: number;
//   }

//   interface IncomingForm extends EventEmitter {
//     onPart: (part: any) => void;
//     handlePart: (part: any) => void;
//     writeHeaders: (statusCode: number, headers: any) => void;
//     parse: (req: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void) => void;
//     openedFiles: File[];
//     fieldSize: number;
//     fileSize: number;
//     fields: Fields;
//     files: Files;
//     bytesReceived: number;
//     bytesExpected: number;
//   }

//   function IncomingForm(options?: IncomingFormOptions): IncomingForm;

//   export {
//     Fields,
//     Files,
//     File,
//     IncomingForm,
//     IncomingFormOptions
//   };
// }
