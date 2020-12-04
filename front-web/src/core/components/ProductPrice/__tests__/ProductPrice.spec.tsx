import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPrice from '..';

describe('Tests with price greather than zero', () => {
    test('should render ProductPrice', () => {
        const price = 1200;
    
        render(
            <ProductPrice price={price} />
        );
    
        const currencyElement = screen.getByText('R$');
        const priceElement = screen.getByText('1,200.00'); 
    
        expect(currencyElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
    });

    test('should render ProductPrice without thousand separator', () => {
        const price = 600;
    
        render(
            <ProductPrice price={price} />
        );
    
        const currencyElement = screen.getByText('R$');
        const priceElement = screen.getByText('600.00'); 
    
        expect(currencyElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
    });
})

describe('Tests with price lower or equal than zero', () => {
    test('should render ProductPrice with price equals zero', () => {
        const price = 0;
    
        render(
            <ProductPrice price={price} />
        );
    
        const currencyElement = screen.getByText('R$');
        const priceElement = screen.getByText('0.00'); 
    
        expect(currencyElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
    });
})


