

const Category = () => {
    return (
        <>
        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>Latest Products</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         <p className='text-center mb-5 text-base font-semibold text-gray-500'>Checkout Our New & Arrival Products</p>
        <div className=''>















        {/* { latest?.map(latest => 
            <div key={latest._id} className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 '
                src={latest.images[0]}
                alt="Shoes" />
                <h1 className='add absolute hidden group-hover:block bottom-0 bg-black w-full text-white text-center text-3xl py-5'>Add to Cart</h1>
                <h1 className='add absolute  hidden group-hover:block top-5 right-4 text-3xl'>W</h1>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{latest.title}</h2>
              <p>${latest.price}</p>
              
            </div>
          </div>
        )
        } */}
        </div>
        </>
    );
};

export default Category;