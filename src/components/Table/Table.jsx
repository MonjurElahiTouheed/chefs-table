import React from 'react';

const Table = () => {
    return (
        <div className='relative'>
            <h2 className='font-lexend text-[#282828] text-2xl font-semibold text-center relative'>Want to cook: 01</h2>
            <div className="overflow-x-auto after:content-[''] after:absolute after:top-9 after:left-1/2 after:w-[350px] after:h-[2px] after:bg-[rgba(40,40,40,0.15)]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className='btn btn-info'>Preparing</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;