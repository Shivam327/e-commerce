import ItemCard from '../Components/ItemCard';

const ScrollContainer = ({ products, isEditable }) => {
  return (
    <>
      <div className='row border border-3 border-primary my-2 overflow-scroll' style={{ height: '73.5vh' }}>
        {products.length === 0 && <h2 className='text-center text-secondary'>No Product Found</h2>}
        {products.map((product) => (
          <ItemCard
            isEditable={isEditable}
            id={product.id}
            key={product.id}
            name={isEditable}
            price={product.data.price}
            description={product.data.description}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollContainer;
