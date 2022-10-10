import React from "react";
import work0 from '../assets/images/farmers-market-organiser.png'; // gives image path
import work1 from '../assets/images/work1.png'; // gives image path
import work2 from '../assets/images/work2.png'; // gives image path
import work3 from '../assets/images/work3.png'; // gives image path
import work4 from '../assets/images/work4.png'; // gives image path
import work5 from '../assets/images/work5.png'; // gives image path


export default function Portfolio() {
    return (
            <div class="row">
                <div class="col-3" id="work">
                    <h1>Work | </h1>
                </div>
                 <div class="col-1">
                </div>    
                <div class="col-8">
                    <div class="card" style={{width:'800px'}}>
                        <img class="card-img-top" src={work0} alt="Farmer market" />
                        <div class="card-img-overlay">
                            <a href="https://farmers-market-organiser-app.herokuapp.com/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>

            // <div class="row">
            //     <div class="col-3">
            //     </div>
            //     <div class="col-1">
            //     </div>
            //     <div class="col-2">
            //         <div class="card mt-3 p-3" style={{width:'170px'}}>
            //             <img class="card-img-top" src={work1} alt="Work1" />
            //             <div class="card-img-overlay">
            //                 <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col-2">
            //         <div class="card mt-3 p-3" style={{width:'170px'}}>
            //             <img class="card-img-top" src={work2.png} alt="Work2" />
            //             <div class="card-img-overlay">
            //                 <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col-2">
            //         <div class="card mt-3 p-3" style={{width:'170px'}}>
            //             <img class="card-img-top" src={work3} alt="Work3"/>
            //             <div class="card-img-overlay">
            //                 <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="col-2">
            //         <div class="card mt-3 p-3" style={{width:'170px'}}>
            //             <img class="card-img-top" src={work4} alt="Work4"/>
            //             <div class="card-img-overlay">
            //                 <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
            //             </div>
            //         </div>
            //     </div>
            // </div>
    );
}