import ProductDetailModel from "./ProductDetailModel";

export interface ProductModel {
    yogurts: ProductDetailModel[];
    icecream: ProductDetailModel[];
    cones: ProductDetailModel[];
    drinks: ProductDetailModel[];
}