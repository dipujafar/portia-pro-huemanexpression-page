"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoImage from "@/assets/portia-page/portia-logo.png";
import Image from "next/image";
import CountryStateCitySelector from "@/components/ui/country-state-city-selector";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  quantity: z.string().min(1, {
    message: "Quantity must be at least 1.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  streetAddress: z.string().min(1, {
    message: "Street address Required.",
  }),
  zipCode: z.string().min(1, {
    message: "Zip code Required.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number Required.",
  }),
});

export function PortiaForm() {
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const { setValue, control, register } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const formattedData = {
      price: 60 * Number(values?.quantity),
      payload: {
        name: values?.firstName + " " + values?.lastName,
        email: values?.email,
        company: values?.company,
        phone: values?.phoneNumber,
        address:
          values?.streetAddress +
          ", " +
          values?.city +
          ", " +
          values?.state +
          ", " +
          values?.country +
          ", " +
          values?.zipCode,
        quantity: Number(values?.quantity),
      },
    };
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.huemanexpressions.com/api/v1/payments/create-portia-payment-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      const data: { message: string; data: { url: string } } = await res.json();
      setLoading(false);

      if (data?.data) {
        route.push(data?.data?.url);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");

      setLoading(false);
    }

    // Handle form submission here
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#684B3C] text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="size-16 bg-white rounded-full flex items-center justify-center h-fit">
            <div className="size-14  rounded-full flex items-center justify-center">
              <Image src={logoImage} alt="logoImage" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              Hue-man Expression Visuals for Portia Pro Users
            </h1>
            <p className="text-rose-100 text-sm">
              Access all material for 1 year.
            </p>
          </div>
        </div>
      </div>

      <Card className="rounded-t-none border-t-0">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Billing Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Billing Information
                </h2>

                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mb-4 space-y-1">
                  <Label>Phone Number</Label>
                  <Controller
                    // @ts-ignore
                    name="phoneNumber"
                    // rules={{ required: "Phone number is required" }}
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        // @ts-ignore
                        value={field.value}
                        onChange={field.onChange}
                        international
                        defaultCountry="US"
                      />
                    )}
                  />
                </div>
                <div>
                  <FormLabel>Address</FormLabel>
                  <CountryStateCitySelector
                    control={control}
                    setValue={setValue}
                    register={register}
                  />
                </div>
              </div>

              {/* Payment Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Payment Information
                </h2>

                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a quantity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[...Array(10)].map((_, index) => (
                              <SelectItem
                                key={index}
                                value={(index + 1).toString()}
                              >
                                {index + 1}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Label
                      htmlFor="hue-man-expression-visuals"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                        <div className="size-4 bg-[#806355] rounded-full flex-shrink-0 my-1 gap-x-2  "></div>{" "}
                        <div>
                          <div className="font-medium text-[#806355] flex items-center gap-x-2 text-lg ">
                            Hue-man Expression Visuals for Portia Pro users.
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 md:ml-4">
                          $60.00
                        </div>
                      </div>
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-[#684B3C] hover:bg-[#806355]"
              >
                Continue to Payment
                {loading && (
                  <span>
                    <Loader2 className="animate-spin" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
