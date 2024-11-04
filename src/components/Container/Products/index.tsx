import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Share/Container";
import ProductsTable from "./ProductsTable";
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";

export default function ProductContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonLink title="Thêm" href="/product/products/add-product" />
      </div>
      <Container>
        <ProductsTable data={products}/>
      </Container>
    </div>
  );
}
