import React, { useEffect, useState } from 'react'
import useApi from '../useApi';

const KheloIndia = () => {
    const endpoint = useApi();
    const [sportsData, setSportsData] = useState([]);
    const fetchSportsData = async () => {
        const response = await endpoint.get("/sports");
        if (response?.status === 200) {
            setSportsData(response?.data?.result);
        }
    }
    useEffect(() => {
        fetchSportsData();
    }, [])
    return (
        <div className='container-fluid table-responsive'>
            {sportsData?.length > 0 &&
                <table className="table table-striped table-primary table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(sportsData[0]).map((data, i) => {
                                // let regex = /^(_id|rank|start_no|start_no|start_no|date)/
                                // if (data.match(regex)) {
                                return <th className='p-3' key={i}>{data}</th>
                                // }
                            })}
                            <th className='p-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sportsData?.map((sportdata, index) => {
                            return (
                                <tr key={index}>
                                    {Object.values(sportdata).map((data, i) => {
                                        return <td className='p-3' key={i}>{data}</td>
                                    })
                                    }
                                    <td className='p-3'>
                                        <a target='_blank' href={process.env.REACT_APP_BACKEND_URL + "/sports/" + sportdata._id}>JSON</a>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default KheloIndia