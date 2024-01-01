import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = ()=>{}


  const isPrevPage = page > 1;
  const isnextPage = page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="">sample1</option>
            <option value="">sample2</option>
          </select>
        </div>


      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="search by name......."
         value={search} onChange={(e)=> setSearch(e.target.value)} />

         <div className="search-product-list">
          <ProductCard
          productId="sdfsfe"
          name="macbook"
          price={324}
          stock={34}
          handler={addToCartHandler}
          photo="https://i.pinimg.com/564x/0d/1a/3f/0d1a3fe737517194b8b1866232ecd5fb.jpg"
          />
         </div>

         <article>
          <button disabled={!isPrevPage} onClick={()=>setPage(prev=>prev - 1)}>Prev</button>
          <span>{page} of {4}</span>
          <button disabled={!isnextPage} onClick={()=>setPage(prev=>prev + 1)}>next</button>
         </article>
      </main>
    </div>
  );
};

export default Search;
