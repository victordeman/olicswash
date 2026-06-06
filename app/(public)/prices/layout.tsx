import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Quotes | OLICS WASH Professional Laundry",
  description: "Request a personalized quote for your laundry and cleaning needs. We provide customized pricing tailored to your specific requirements.",
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
