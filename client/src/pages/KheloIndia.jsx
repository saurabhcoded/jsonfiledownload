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
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(sportsData[0]).map((data, i) => {
                                return <th key={i}>{data}</th>
                            })}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sportsData?.map((sportdata, index) => {
                            return (
                                <tr key={index}>
                                    {Object.values(sportdata).map((data, i) => {
                                        return <td key={i}>{data}</td>
                                    })}
                                    <td>
                                        <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(sportdata))}`} download="filename.json">Download JSON</a>
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