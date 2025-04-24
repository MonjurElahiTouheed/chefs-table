import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe , handleRecipe}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
            <div className="card bg-base-100 w-full shadow-sm p-6">
                <figure className="rounded-2xl">
                    <img
                        src={recipe_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-0 mt-6">
                    <h2 className="card-title text-xl text-[#282828] font-lexend">{recipe_name}</h2>
                    <p className='font-fira text-[#878787] text-base my-4'>{short_description}</p>
                    <div className='border-t-1 border-b-1 border-[rgba(40,40,40,0.1)] pt-6 pb-4'>
                        <h3 className='font-medium text-lg text-[#282828] font-lexend'>Ingredients: {ingredients.length}</h3>
                        <ul>
                            {
                                ingredients.map(ingredient => <li className='font-fira text-lg text-[#878787] list-disc ml-5'>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="">
                        <div className='flex gap-4'>
                            <p className='font-fira text-[rgba(40,40,40,0.8)] text-base flex items-center gap-2 w-[6    %]'><LuClock3 size={24}/> {preparing_time.split(' ')[0]} minutes</p>
                            <p className="font-fira text-[rgba(40,40,40,0.8)] text-base flex items-center gap-2"><AiOutlineFire size={24}/> {calories.split(' ')[0]} calories</p>
                        </div>
                        <button onClick={() => handleRecipe(recipe)} className="btn border-none bg-[#0BE58A] text-xl text-[#150B2B] font-semibold font-lexend px-[28px] py-[23px] rounded-[50px] mt-6">Want to Cook</button>
                    </div>
                </div>
            </div>
    );
};

export default Recipe;