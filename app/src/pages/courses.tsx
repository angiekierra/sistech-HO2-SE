import React from "react";
import Image from "next/image";
import { CourseCard } from "@/Components/CourseCard";

export default function Courses() {
  return (
    <div className="bg-secondary-black p-20 text-white w-full">
      <div className="w-full">
        <div className="flex flex-col flex-wrap justify-between gap-8 items-center m-8 max-w-full text-center ">
            <h4 className="font-bold text-primary-green" >Our Courses</h4>
            <h3 className="font-bold text-white" >Our Best Courses Offered and Taught by The Best Instructors</h3>
            <p className="text-white">Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
            {/* CARDS */}
            <div className="flex flex-row gap-2">
                <CourseCard image="/c-img1.png" title="Basics of JAVA" description="Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully .." level="Beginner" price="125.65"></CourseCard>
            </div>
        </div>
      </div>
    </div>
  );
}
