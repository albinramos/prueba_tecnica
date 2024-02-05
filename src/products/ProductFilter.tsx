
interface FilterProps {
  filters: {
    postalCode: string;
    category: string;
    price: number | null;
  };
  onFilterChange: (newFilters: { postalCode: string; category: string; price: number | null }) => void;
}

function ProductFilter({ filters, onFilterChange }: FilterProps) {
  const { postalCode, category, price } = filters;

  return (
    <div>
      <h3>Filters</h3>
      
      {/* Filtro de código postal */}
      <label>
        Postal Code:
        <select value={postalCode} onChange={(e) => onFilterChange({ ...filters, postalCode: e.target.value })}>
          <option value="all">All</option>
          <option value="even">Even</option>
          <option value="odd">Odd</option>
        </select>
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}>
          <option value="all">All</option>
          <option value="Laptop">Laptop</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Headphones">Headphones</option>
        </select>
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price || ''}
          onChange={(e) => onFilterChange({ ...filters, price: e.target.value ? parseFloat(e.target.value) : null })}
        />
      </label>
    </div>
  );
}

export default ProductFilter;