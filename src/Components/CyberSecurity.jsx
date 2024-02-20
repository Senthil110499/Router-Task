import React from 'react';

const CyberSecurity = ({data}) => {
    const cybersecurityData=data.filter((item)=>item.course==='CYBER SECURITY')
    return (
        <div className='container'>
            <div className='row'>
            {cybersecurityData.map((item, index) => {
                return (
                    <>
                        <div className='col-12 col-md-6 col-lg-4 mt-5' key={index}>
                            <div className='card h-100'>
                                <div className='card-image'>
                                    <img width='100%' src={item.image} alt="" />
                                </div>
                                <div className='card-text p-4'>
                                    <div className='card-text fw-bolder'>{item.content1}</div><br />
                                    <div className='card-text text-secondary'>{item.content2}</div>
                                    <div className='read card-text fw-bolder'>Read More</div>
                                </div>
                                <div className='card-footer opacity-50'>{item.date} {item.month} - No Comments</div>
                            </div>
                        </div>
                    </>
                )
            })}
                </div>
        </div>
    );
};

export default CyberSecurity;