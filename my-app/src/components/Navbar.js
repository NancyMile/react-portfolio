import React from "react";

export default function Navbar() {
    return (
        <div class="row">
            <div class="col-12">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                    <a class="nav-link active" href="#about">About me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#work">Work</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact Me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </div>


    );
}