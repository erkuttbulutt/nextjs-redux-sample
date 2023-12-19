import AddBasketButton from "@/components/add-basket-button";
import { store } from "@/store/index";
import { fetchProduct } from "@/store/products-store";

const ProductDetailPage = async ({ params: { id } }) => {
  await store.dispatch(fetchProduct(id));

  const { product } = store.getState().products;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
};

export default ProductDetailPage;
