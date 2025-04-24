import { useEffect, useState } from "react";

const Table = ({ tableDatas, setTableDatas }) => {

    const [cookings, setCookings] = useState([]);
    const [cookingTotal, setCookingTotal] = useState(0);
    const [caloriesTotal, setCaloriesTotal] = useState(0);

    const handlePreparing = tableData => {
        setCookings([...cookings, tableData]);
        const removedItemCookings = tableDatas.filter(cookingId => cookingId.recipe_id !== tableData.recipe_id);
        console.log(removedItemCookings)
        setTableDatas(removedItemCookings);
    }

    useEffect(() => {
        cookings.map(cookingData => {
            const newTotalCookingTime = cookingTotal + parseInt(cookingData.preparing_time.slice(0, 2));
            setCookingTotal(newTotalCookingTime)
        })

        // cookings.map(cookingData => {
        //     const newCaloriesTotal = caloriesTotal + parseInt(cookingData?.calories.slice(0, 3));
        //     setCaloriesTotal(newCaloriesTotal)
        // })
        // using Reduce array method
        const newCaloriesTotal = cookings.reduce((accum, cookingData) => {
            return accum + parseInt(cookingData.calories.slice(0, 3))
        }, 0);

        setCaloriesTotal(newCaloriesTotal)

    }, [cookings])


    return (
        <div className='card bg-base-100 shadow-sm relative w-full md:w-[42%] pt-10'>
            <div>
                <h2 className='font-lexend text-[#282828] text-2xl font-semibold text-center relative'>Want to cook: {tableDatas.length}</h2>
                <div className="mx-auto max-w-[54%] border-b-2 border-[rgba(40,40,40,0.15)] mt-4"></div>
                <div className="overflow-x-auto">
                    <table className="table border-collapse border-0 mt-7">
                        {/* head */}
                        <thead>
                            <tr className='border-0'>
                                <th></th>
                                <th className='text-[#878787] font-medium'>Name</th>
                                <th className='text-[#878787] font-medium'>Time</th>
                                <th className='text-[#878787] font-medium'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDatas.map((tableData, index) => (
                                    <tr className='border-0 bg-[rgba(40,40,40,0.03)]'>
                                        <th className='text-[rgba(40,40,40,0.8)] pl-6 pr-3'>{index + 1}</th>
                                        <td className="px-3 font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{tableData?.recipe_name}</td>
                                        <td className="px-3 font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{tableData?.preparing_time.slice(0, 2)} minutes</td>
                                        <td className="px-3 font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{tableData?.calories.slice(0, 3)} calories</td>
                                        <td className="pl-3 pr-6"><button onClick={() => handlePreparing(tableData)} className='btn bg-[#0BE58A] text-[#150B2B] text-base font-medium rounded-full px-[18px] py-[9px]'>Preparing</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="relative mt-8">
                <h2 className='font-lexend text-[#282828] text-2xl font-semibold text-center relative'>Currently cooking: {cookings.length}</h2>
                <div className="mx-auto max-w-[54%] border-b-2 border-[rgba(40,40,40,0.15)] mt-4"></div>
                <div className="overflow-x-auto">
                    <table className="table border-collapse border-0 mt-7">
                        {/* head */}
                        <thead>
                            <tr className='border-0'>
                                <th></th>
                                <th className='text-[#878787] font-medium'>Name</th>
                                <th className='text-[#878787] font-medium'>Time</th>
                                <th className='text-[#878787] font-medium'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cookings.map((cookingData, index) => (
                                    <tr className='border-0 bg-[rgba(40,40,40,0.03)]'>
                                        <th className='text-[rgba(40,40,40,0.8)] pl-6 pr-3 w-0'>{index + 1}</th>
                                        <td className="w-[157px] pl-3 pr-[21px] font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{cookingData?.recipe_name}</td>
                                        <td className="pl-[21px] font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{cookingData?.preparing_time.slice(0, 2)} minutes</td>
                                        <td className=" font-fira text-base text-[rgba(40,40,40,0.7)] leading-[26px]">{cookingData?.calories.slice(0, 3)} calories</td>
                                    </tr>
                                ))
                            }


                            <tr className='border-0'>
                                <th></th>
                                <td></td>
                                <td className="text-[rgba(40,40,40,0.8)] text-base font-medium font-lexend p-0 w-[101px] pt-4 pr-5">Total Time = {cookingTotal} minutes</td>
                                <td className="text-[rgba(40,40,40,0.8)] text-base font-medium font-lexend p-0 w-[127px] pt-4 pr-[19px]">Total Calories = {caloriesTotal} calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;