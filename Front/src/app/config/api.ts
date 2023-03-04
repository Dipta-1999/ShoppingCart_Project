import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:9190'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/products'
export const wishlistUrl = baseUrl + '/wishlist'
