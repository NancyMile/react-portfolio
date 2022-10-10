import React from "react";

import test_download_file from '../assets/files/Resume.pdf'; // gives image path

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
                    <a class="nav-link" href={test_download_file} download="Resume.pdf"> Resume</a>
                    </li>
                </ul>
            </div>
        </div>


    );
}