import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Table from "../Table/Table";

const RecipesDetails = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch('recipes.json');
                const data = await res.json();
                console.log(data)
            setRecipes(data);
        }
        catch(error) {
            console.log(error);
        }
    } 
    fetchData();
}, [])

// console.log(data)

    return (
        <div className="flex">
            <div className="flex flex-wrap gap-6 max-w-[60%]">
                {
                    recipes.map(recipe => (
                        <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
                    ))
                }
            </div>
            <div>
                <Table></Table>
            </div>
        </div>
    );
};

export default RecipesDetails;