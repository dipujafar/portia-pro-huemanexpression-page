"use client";

import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import Link from "next/link";
import lottieAni from "@/assets/lottie-files/error_animation.json";
import Container from "@/components/Container";
import { ChevronsLeft } from "lucide-react";

const CancelPaymentContainer = () => {
  return (
    <>
      <Container className="flex items-center justify-center flex-col min-h-[calc(100vh-250px)]">
        <Lottie
          animationData={lottieAni}
          loop={true}
          className="w-[300px] md:w-[500px] lg:w-[500px]"
        ></Lottie>

        <h1 className="text-5xl font-medium text-green-800">
          Something went wrong{" "}
        </h1>
        <div className="mt-5 space-x-2">
          <Link href={"/"} replace>
            <Button className="bg-[#684B3C] md:w-48 w-40 cursor-pointer group">
              {" "}
              <ChevronsLeft className="group-hover:-translate-x-1 transition-transform duration-150" />{" "}
              Go Back Home
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default CancelPaymentContainer;
