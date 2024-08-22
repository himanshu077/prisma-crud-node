export type requestResponse = {
    status:string,
    statusCode:number,
    message:string,
    data:any[]
}

export interface CreateProductBody {
    name: string;
    color: string;
    price: number;
  }