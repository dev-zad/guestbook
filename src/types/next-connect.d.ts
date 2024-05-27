declare module 'next-connect' {
  import { NextApiRequest, NextApiResponse, NextMiddleware } from 'next';
  import { IncomingMessage, ServerResponse } from 'http';
  import { ParsedUrlQuery } from 'querystring';

  type Middleware<Request, Response> = (
    req: Request,
    res: Response,
    next: (err?: any) => void
  ) => void;

  interface Options<Request extends IncomingMessage, Response extends ServerResponse> {
    onError?: (err: any, req: Request, res: Response, next: (err?: any) => void) => void;
    onNoMatch?: (req: Request, res: Response) => void;
  }

  interface Handler<Request extends IncomingMessage = IncomingMessage, Response extends ServerResponse = ServerResponse> {
    use(middleware: Middleware<Request, Response>): this;
    use(middleware: Middleware<Request, Response>[]): this;
    use(middleware: Handler<Request, Response>): this;
    get(middleware: Middleware<Request, Response>): this;
    get(middleware: Middleware<Request, Response>[]): this;
    get(handler: (req: Request, res: Response) => void): this;
    post(middleware: Middleware<Request, Response>): this;
    post(middleware: Middleware<Request, Response>[]): this;
    post(handler: (req: Request, res: Response) => void): this;
    put(middleware: Middleware<Request, Response>): this;
    put(middleware: Middleware<Request, Response>[]): this;
    put(handler: (req: Request, res: Response) => void): this;
    delete(middleware: Middleware<Request, Response>): this;
    delete(middleware: Middleware<Request, Response>[]): this;
    delete(handler: (req: Request, res: Response) => void): this;
    patch(middleware: Middleware<Request, Response>): this;
    patch(middleware: Middleware<Request, Response>[]): this;
    patch(handler: (req: Request, res: Response) => void): this;
    options(middleware: Middleware<Request, Response>): this;
    options(middleware: Middleware<Request, Response>[]): this;
    options(handler: (req: Request, res: Response) => void): this;
    head(middleware: Middleware<Request, Response>): this;
    head(middleware: Middleware<Request, Response>[]): this;
    head(handler: (req: Request, res: Response) => void): this;
    handler(opts?: Options<Request, Response>): (
      req: Request,
      res: Response
    ) => void;
  }

  export default function nextConnect<
    Request extends IncomingMessage = IncomingMessage,
    Response extends ServerResponse = ServerResponse
  >(opts?: Options<Request, Response>): Handler<Request, Response>;
}
