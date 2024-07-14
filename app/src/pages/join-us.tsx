import React from "react";
import Image from "next/image";
import { Button } from "@/Components/Button";

export default function JoinUs() {
  return (
    <div className="bg-secondary-black p-20 text-white">
      <div className="w-full">
        <div className="flex flex-row flex-wrap justify-between gap-8 items-center m-8 max-w-full ">
            <h4 >Join Us</h4>
            <h3 >Join Us by Creating Account or Start a Free Trial</h3>
                <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
            <div className="flex flex-row gap-2">
              <Button variant="green">Register</Button>
              <Button variant="white">Login</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
