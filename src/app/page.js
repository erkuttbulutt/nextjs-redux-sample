import AddBasketButton from "@/components/add-basket-button";
import Link from "next/link";
import { store } from "@/store/index";
import { fetchProducts } from "@/store/products-store";

export default async function Home() {
  await store.dispatch(fetchProducts());
  const {products} = store.getState().products;

  if (!products.length) {
    return <h1>No products</h1>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h4 className="product-title">{product.title}</h4>
            <p>{product.price}</p>
            <AddBasketButton product={product} />
            <Link href={`/products/${product.id}`}>See detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
}