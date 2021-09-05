import React from "react";
import  { Suspense  } from 'react';
import LazyOne from "./LazyOne";
import LazyThree from "./LazyThree";
const LazyTwo = React.lazy(() => import("./LazyTwo"));



export default class APPP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
             <LazyOne />

                <Suspense fallback={<div>Loading...</div>}>
                
                <LazyTwo /> 
                </Suspense>

                <LazyThree />
            </>
        )
    }


}