/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/VWq3vGAS5Sl
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function PricingSubscription() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-5 mt-6 ">
      <Card className="border-2 border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-[300px]">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 p-2 bg-white border-2 border-green-500 rounded-full -mt-4 -mr-4">
            <LeafIcon className="w-4 h-4 text-green-500" />
          </div>
          <CardTitle className="text-base font-bold text-gray-800">BASIC</CardTitle>
          <CardDescription>
            Introduce our ecosystems to farmer & fostering long-term reliance to our product.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left">
          <div className="text-xl font-bold text-gray-800">Free</div>
          <div className="text-xs text-muted-foreground">/ month</div>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500 " />
              <span className="ml-1 text-sm">Precision mapping with Google Maps</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Real time weather & humidity in selected area</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Limited AI disease detection</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Limited AI nutrient detection</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Task and Team Management</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Consultation, services and farmer&aposs marketplace</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border-2 border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-[300px]">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 p-2 bg-white border-2 border-green-500 rounded-full -mt-4 -mr-4">
            <RocketIcon className="w-4 h-4 text-green-500" />
          </div>
          <CardTitle className="text-xk font-bold text-green-700">PREMIUM</CardTitle>
          <CardDescription>Provide full-fledge apps with more features with no usage restrictions.</CardDescription>
        </CardHeader>
        <CardContent className="text-left mt-4">
          <div className="text-xl font-bold">$20.50</div>
          <div className="text-xs text-muted-foreground">/ month</div>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">
                All features in <span className="font-bold">Basic Plan</span>
              </span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Unlimited AI disease detection (Crop Vision)</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Unlimited AI nutrient efficiency detection (Crop Vision)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border-2 border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-[300px]">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 p-2 bg-white border-2 border-green-500 rounded-full -mt-4 -mr-4">
            <BriefcaseIcon className="w-4 h-4 text-green-500" />
          </div>
          <CardTitle className="text-base font-bold text-gray-800">CUSTOM ENTERPRISE SOLUTION</CardTitle>
          <CardDescription>
            Tailored solutions for large-scale enterprises with custom needs and support.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold text-gray-800">Contact Us</div>
          <div className="text-xs text-muted-foreground">for pricing</div>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">
                All features in <span className="font-bold text-gray-800">Premium Plan</span>
              </span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span className="ml-1 text-sm">Custom integrations and support</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
