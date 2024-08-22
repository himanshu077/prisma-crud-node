import { body, query, ValidationChain } from 'express-validator';

export const createProductValidation: ValidationChain[] = [
  body('name')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  body('color')
    .isString()
    .notEmpty()
    .withMessage('Color is required'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
];

export const updateProductValidation: ValidationChain[] = [
  query('name')
    .optional()
    .isString()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  query('color')
    .optional()
    .isString()
    .notEmpty()
    .withMessage('Color is required'),
  query('price')
    .optional()
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
  query('id')
    .notEmpty()
    .isString()
    .withMessage('ID is required'),
];

export const createMultiProductValidation: ValidationChain[] = [
  body('*.name')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  body('*.color')
    .isString()
    .notEmpty()
    .withMessage('Color is required'),
  body('*.price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
];
