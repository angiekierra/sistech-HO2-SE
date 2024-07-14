import React from "react";
import Image from "next/image";

type CourseCardProps = {
    image:string,
    title:string,
    description:string,
    level:string,
    price:string,
}

function CourseCard({image,title,description,level,price}: CourseCardProps){
    return (
        <div className="bg-white w-72 h-[380px] p-4 rounded-2xl shadow-md">
      <div className="">
        <Image src={image} alt={title} width={200} height={150} className="w-full h-32 object-cover rounded-lg" />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h4 className="text-secondary-black text-left text-lg font-bold">{title}</h4>
          <div className="bg-green-200 rounded-md h-5 w-24 flex items-center justify-center">
            <p className="text-green-600 text-xs font-semibold">{level}</p>
          </div>
        </div>
        <p className="p-1 text-secondary-black text-sm text-justify">{description}</p>
        <div className="flex items-center p-2">
          <h4 className="text-2xl font-bold text-primary-green">{price}</h4>
          <p className="p-0 pl-1 text-secondary-black">AUD</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <button className="col-span-4 bg-primary-green text-white py-2 rounded-lg hover:bg-green-700">
          View Courses
        </button>
        <button className="col-span-1 border-2 border-primary-green rounded-full flex items-center justify-center w-8 h-8">
          <Image src="/shopping-bag.png" alt="shopping-bag" width={50} height={50} className="w-4 h-4" />
        </button>
      </div>
    </div>
            );
}

export { CourseCard };