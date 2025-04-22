import { useEffect, useState } from "react";

const Table = ({ tableDatas, setTableDatas }) => {

    const [cookings, setCookings] = useState([]);
    const [cookingTotal, setCookingTotal] = useState(0);
    const [caloriesTotal, setCaloriesTotal] = useState(0);

    const handlePreparing = tableData => {
        setCookings([...cookings, tableData]);
        // console.log(tableData)
        const removedItemCookings = tableDatas.filter(cookingId =>  cookingId.recipe_id !== tableData.recipe_id);
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
        <div className='relative'>
            <h2 className='font-lexend text-[#282828] text-2xl font-semibold text-center relative'>Want to cook: {tableDatas.length}</h2>
            <div className="overflow-x-auto after:content-[''] after:absolute after:top-6 after:mt-5 after:left-[120px] after:w-[350px] after:h-[2px] after:bg-[rgba(40,40,40,0.15)]">
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
                                <tr className='border-0'>
                                    <th className='text-[rgba(40,40,40,0.8)]'>{index + 1}</th>
                                    <td>{tableData?.recipe_name}</td>
                                    <td>{tableData?.preparing_time.slice(0, 2)} minutes</td>
                                    <td>{tableData?.calories.slice(0, 3)} calories</td>
                                    <td><button onClick={() => handlePreparing(tableData)} className='btn bg-[#0BE58A] text-[#150B2B] text-base font-medium rounded-full px-[18px] py-[9px]'>Preparing</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <h2 className='font-lexend text-[#282828] text-2xl font-semibold text-center relative'>Want to cook: {tableDatas.length}</h2>
            <div className="overflow-x-auto after:content-[''] after:absolute after:top-6 after:mt-5 after:left-[120px] after:w-[350px] after:h-[2px] after:bg-[rgba(40,40,40,0.15)]">
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
                                <tr className='border-0'>
                                    <th className='text-[rgba(40,40,40,0.8)]'>{index + 1}</th>
                                    <td>{cookingData?.recipe_name}</td>
                                    <td>{cookingData?.preparing_time.slice(0, 2)} minutes</td>
                                    <td>{cookingData?.calories.slice(0, 3)} calories</td>
                                </tr>
                            ))
                        }


                        <tr className='border-0'>
                            <th></th>
                            <td></td>
                            <td>{cookingTotal} minutes</td>
                            <td>{caloriesTotal} calories</td>
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;