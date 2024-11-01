import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Share/Container";
import ProductsTable from "./ProductsTable";

export default function ProductContent() {
  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonLink title="Thêm" href="/product/products/add-product" />
      </div>
      <Container>
        <ProductsTable />
      </Container>
    </div>
  );
}
