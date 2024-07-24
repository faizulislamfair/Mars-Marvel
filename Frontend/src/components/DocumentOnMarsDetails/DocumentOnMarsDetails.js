import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './DocumentOnMarsDetails.css';
import DocumentOnMarsDetailsView from '../DocumentOnMarsDetailsView/DocumentOnMarsDetailsView';


const DocumentOnMarsDetails = () => {

    const document = useLoaderData();

    console.log(document);


    return (
        <div className='container grid grid-cols-1 place-items-center'>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 mt-10'>
                {
                    document.doc_url?.map((eachDocDetails, id) => <DocumentOnMarsDetailsView className='m-5' key={id + 1} eachDocDetails={eachDocDetails}></DocumentOnMarsDetailsView>)
                }
            </div>
        </div>
    );
};

export default DocumentOnMarsDetails;