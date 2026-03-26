
import { expect, it,describe ,vi , beforeEach} from 'vitest';
import { render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Products } from './Products';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    })
  );
});

describe('product compound',()=>{
    it('dispalys the product details correctly',()=>{
        const filteredProducts = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        }
        const loadCart = vi.fn();

        render(<Products filteredProducts={filteredProducts} loadCart={loadCart}/>);
        expect(
            screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument()
        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument()
        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src',"images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(
            screen.getByTestId('product-rating')
        ).toHaveAttribute('src','images/ratings/rating-45.png');
        expect(
            screen.getByText('87')
        ).toBeInTheDocument()
    })
    it('add products to the cart', async()=>{
        const filteredProducts = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        }
        const loadCart = vi.fn();

        render(<Products filteredProducts={filteredProducts} loadCart={loadCart}/>);
        const user = userEvent.setup();
        const addToCartBtn = screen.getByTestId('add-to-cart-btn');
        await user.click(addToCartBtn);
        
        expect(fetch).toHaveBeenCalledWith(
            `/api/cart-items`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 1,
                })
            }
        );
        await waitFor(() => {
        expect(loadCart).toHaveBeenCalled(); 
        });
    });
});
