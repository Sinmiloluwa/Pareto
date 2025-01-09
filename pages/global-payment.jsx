import Navbar from "@/components/navbar";
import HowItWorks from "@/components/howitworks";
import Global from "@/components/global";
import FinancialBenefits from "@/components/benefit";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";

export default function GlobalPayment() {
  const stepsData = [
    {
      stepNumber: "Step 01",
      title: "Payment Initiation :",
      description:
        "Initiate a payment by logging into your Paretopay account and entering the recipient's details, including their name, bank account number, and currency.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 02",
      title: "Currency Conversion :",
      description:"Make use of our currency conversion option to convert from base currency to receiving currency at current market rate.",
      bgColor: "bg-nw1",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 03",
      title: "Settlement and Clearing :",
      description:
        "We settle and clear the payment through our network of partner banks and financial institutions, ensuring that the funds are delivered quickly and securely. Our system is designed to minimize the risk of failed payments and delays.",
      bgColor: "bg-nw2",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 04",
      title: "Real-time Tracking and Updates :",
      description:
        "Track the status of your payment in real-time, from initiation to settlement. Our system provides you with regular updates, so you can stay informed and plan your finances with confidence.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
  ];
  return (
    <div>
      <Navbar />
      <Global />
      <HowItWorks steps={stepsData} />
      <FinancialBenefits
        title="Benefits"
        subheading='Maximize Your Global Reach with Our Payment Solutions'
        benefits={[
          "Fast and secure transactions",
          "Competitive exchange rates",
          "Real-time tracking and updates",
          "Multi-currency support",
        ]}
        image="/assets/Frame 1171280282.png"
      />{" "}
      <Glossary
        title="Glossary"
        description="Global Payment can be complex, and understanding the terminology is crucial to making informed decisions. Here are some possible glossary terms that might be relevant for a global payments platform"
        items={[
          {
            term: "Cross-Border Payment",
            definition:
              "A payment that is made from one country to another, often involving the exchange of different currencies.",
          },
          {
            term: "Treasury Management",
            definition:
              " The process of managing a company's financial assets and liabilities.",
          },
          {
            term: "Settlement",
            definition:
              "The process of finalizing a payment and transferring funds to the recipient's account.",
          },
          {
            term: "Currency Conversion",
            definition:
              "The process of exchanging one currency for another, often at a current market rate.",
          },
          {
            term: "FX Hedging",
            definition: "A strategy used to mitigate the risk of exchange rate fluctuations.",
          },
      
        ]}
      />


      <Footer/>
    </div>
  );
}
