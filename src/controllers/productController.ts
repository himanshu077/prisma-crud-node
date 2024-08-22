import { Request, Response } from 'express';
import prisma from '../models/model';
import { isValidObjectId } from '../utils/functions/commonFunctions';
import {requestResponse,CreateProductBody} from "../types/responseTypes"
export const createProduct = async (req: Request<{},{},CreateProductBody>, res: Response) => {
  const { name, color, price } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        color,
        price,
      },
    });
    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Data added successfully',
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
      data: [],
    });
  }
};

export const createManyProduct = async (req: Request, res: Response) : Promise<Response<requestResponse>|void> => {
  const products = req.body;
  try {
    await prisma.product.createMany({
      data: products,
    });
    res.status(200).send({
      status: 'success',
      statusCode: 200,
      message: 'Products added successfully',
      data: [],
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
      data: [],
    });
  }
};

export const getProduct = async (req: Request, res: Response): Promise<Response<requestResponse>|void> => {
  const { id } = req.params;
  try {
    if (!id || !isValidObjectId(id)) {
      const message: string = !id ? 'ID is required' : 'ID format is invalid';
      return res.status(400).json({
        status: 'failed',
        statusCode: 400,
        message,
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
    return  res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Product found successfully',
        data: product,
      });
    } else {
   return   res.status(404).json({
        status: 'failed',
        statusCode: 404,
        message: 'Product not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response): Promise<Response<requestResponse>|void> => {
  const {
    page = '1',
    page_size = '10',
    sort_order = 'desc',
    search = '',
    sort_by = ['createdAt'],
  } = req.query as {
    page?: string;
    page_size?: string;
    sort_order?: 'asc' | 'desc';
    search?: string;
    sort_by?: string[];
  };

  try {
    const sortFields = sort_by.map((field) => ({
      [field]: sort_order,
    }));

    const products = await prisma.product.findMany({
      skip: (Number(page) - 1) * Number(page_size),
      take: Number(page_size),
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      orderBy: sortFields,
    });

    const total_products = await prisma.product.count({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Products found successfully',
      data: products,
      total_products,
      page: Number(page),
      page_size: Number(page_size),
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<Response<requestResponse>|void> => {
  const { id, name, price, color } = req.query as {
    id?: string;
    name?: string;
    price?: string;
    color?: string;
  };

  try {
    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({
        status: 'failed',
        statusCode: 400,
        message: 'ID format is invalid',
        data: [],
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      const updatedProduct = await prisma.product.update({
        where: { id },
        data: {
          name,
          price: price ? parseFloat(price) : undefined, // Convert price to number if present
          color,
        },
      });
   return   res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Product updated successfully',
        data: updatedProduct,
      });
    } else {
   return   res.status(404).json({
        status: 'failed',
        statusCode: 404,
        message: 'Product not found',
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
      data: [],
    });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<Response<requestResponse>|void> => {
  const { id } = req.params;
  try {
    if (!id || !isValidObjectId(id)) {
      const message: string = !id ? 'ID is required' : 'ID format is invalid';
      return res.status(400).json({
        status: 'failed',
        statusCode: 400,
        message,
        data: [],
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      await prisma.product.delete({
        where: { id },
      });
   return   res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Product deleted successfully',
        data: [],
      });
    } else {
  return    res.status(404).json({
        status: 'failed',
        statusCode: 404,
        message: 'Product not found',
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'failed',
      statusCode: 400,
      message: (error as Error).message,
      data: [],
    });
  }
};
