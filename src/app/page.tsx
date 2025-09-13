import Container from "@/components/Container";
import { PortiaDetails } from "@/components/PortiaDetails";
import { PortiaForm } from "@/components/PortiaForm";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#F0E8DE] pt-5">
      <Container className="flex flex-col lg:flex-row gap-x-4 gap-y-5 pb-5">
        <div className="2xl:w-2/3 lg:w-1/2">
          <PortiaDetails />
        </div>
        <div className="2xl:w-1/3 lg:w-1/2">
          <PortiaForm />
        </div>
      </Container>
    </div>
  );
}
