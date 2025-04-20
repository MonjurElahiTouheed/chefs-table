import RecipesDetails from "./RecipesDetails";

const Recipes = () => {
    return (
        <div>
            <div className='text-center mt-[100px] mb-12'>
                <h2 className='text-[40px] text-[#150B2B] font-semibold font-lexend'>Our Recipes</h2>
                <p className="text-base text-[rgba(21,11,43,0.6)] mt-6 max-w-[823px] mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
            <RecipesDetails></RecipesDetails>
        </div>
    );
};

export default Recipes;