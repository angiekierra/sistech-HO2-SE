import React from "react";
import { BlogCard } from "@/Components/BlogCard";

export default function Blog() {
  return (
    <div className="bg-white p-20 text-secondary-black w-full">
      <div className="w-full">
        <div className="flex flex-col flex-wrap justify-between gap-8 items-center m-8 max-w-full text-center ">
            <h4 className="font-bold text-primary-green" >Blog Posts</h4>
            <h3 className="font-bold " >Articles Will Help to Stay Up to Date with Knowledge</h3>
            <p className="">Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
            {/* CARDS */}
            <div className="flex flex-row gap-2">
                <BlogCard image="/article1.png" title="Why Java is Best Programming Language?" description="java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ..."></BlogCard>
            </div>
        </div>
      </div>
    </div>
  );
}
