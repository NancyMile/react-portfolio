import React from "react";

export default function Portfolio() {
    return (
            <div class="row">
                <div class="col-3" id="work">
                    <h1>Work | </h1>
                </div>
                <div class="col-1">
                        {/* space */}
                </div>    
                <div class="col-8">
                    <div class="card" style="width:800px">
                        <img class="card-img-top" src="./assets/images/farmers-market-organiser.png" alt="Farmer market">
                        <div class="card-img-overlay">
                            <a href="https://farmers-market-organiser-app.herokuapp.com/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>    
            {/* end work section */}
            {/* list prev works */}
            <div class="row">
                <div class="col-3">
                    {/* blank */}
                </div>
                <div class="col-1">
                        {/* space */}
                </div>    
                <div class="col-2">
                    <div class="card mt-3 p-3" style="width:170px">
                        <img class="card-img-top" src="./assets/images/work1.png" alt="Work1">
                        <div class="card-img-overlay">
                            <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="card mt-3 p-3" style="width:170px">
                        <img class="card-img-top" src="./assets/images/work2.png" alt="Work2">
                        <div class="card-img-overlay">
                            <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="card mt-3 p-3" style="width:170px">
                        <img class="card-img-top" src="./assets/images/work3.png" alt="Work3">
                        <div class="card-img-overlay">
                            <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="card mt-3 p-3" style="width:170px">
                        <img class="card-img-top" src="./assets/images/work4.png" alt="Work4">
                        <div class="card-img-overlay">
                            <a href="https://github.com/NancyMile/first-day-repo" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end list prev works */}

    );
}