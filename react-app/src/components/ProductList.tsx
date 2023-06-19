import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <div>
      <h2>ProductList</h2>
    </div>
  );
};

export default ProductList;
