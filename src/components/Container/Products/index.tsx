import Loader from '@/common/Loader';
import ButtonLink from '@/components/ButtonLink';
import Container from '@/components/Share/Container';
import { deleteProduct, getProducts } from '@/services/productService';
import { useEffect, useState } from 'react';
import ProductsTable from './ProductsTable';

export default function ProductContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      // After successful deletion, refetch the products
      await getProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
      finally{
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex mb-4 justify-end">
            <ButtonLink title="Thêm" href="/product/products/add-product" />
          </div>
          <Container>
            <ProductsTable data={products} onDelete={handleDeleteProduct}/>
          </Container>
        </>
      )}
    </div>
  );
}
