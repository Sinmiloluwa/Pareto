import Navbar from "@/components/navbar";
import Trade from "@/components/trade";
import FinancialBenefits from "@/components/benefit";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";
import HowItWorks from "@/components/howitworks";
export default function TradeFinance() {
  const stepsData = [
    {
      stepNumber: "Step 01",
      title: "Application and Approval :",
      description:
        "We review your application and verify your business information, including your company profile, financial statements, and trade history. Our team of experts assesses your creditworthiness and evaluates the risk associated with your business. If approved, we provide you with a tailored trade finance solution that meets your specific needs.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 02",
      title: "Invoice Financing :",
      description:
        "You upload your invoices to our platform, which are then verified and validated by our team. We advance up to [x]% of the invoice value to you, providing you with immediate access to working capital. This funding can be used to pay for goods, services, or other business expenses.",
      bgColor: "bg-nw1",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 03",
      title: "Payment Processing :",
      description:
        "Your customer pays the invoice amount to us, either directly or through a letter of credit. We process the payment and settle the transaction, ensuring that you receive the funds quickly and securely. Our platform provides real-time tracking and updates, so you can monitor the status of your payments at any time.",
      bgColor: "bg-nw2",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 04",
      title: "Risk Management :",
      description:
        "We assume the risk of non-payment by your customer, protecting you from potential losses. Our team of experts monitors the creditworthiness of your customers and provides guidance on managing credit risk. In the event of non-payment, we work with you to resolve the issue and minimize any potential losses.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
  ];

  return (
    <div>
      <Navbar />
      <Trade />
      <HowItWorks steps={stepsData} />
      <FinancialBenefits
        title="Benefits"
        subheading='Simplify Your Financial Management'
        benefits={[
          "Get instant access to working capital",
          "Manage cash flow and payment risks",
          "Increase your business's competitiveness",
          "Improve relationships with suppliers and buyers",
        ]}
        image="/assets/Group 1776.png"
      />{" "}
      <Glossary
        title="Glossary"
        description="Trade finance can be complex, and understanding the terminology is crucial to making informed decisions. Here's a list of key terms and concepts related to trade finance."
        items={[
          {
            term: "Invoice Financing",
            definition:
              "A type of financing where a business receives an advance on outstanding invoices, allowing them to access working capital before the invoices are paid.",
          },
          {
            term: "Letter of Credit",
            definition:
              "A document issued by a bank guaranteeing payment to a seller upon presentation of specific documents, such as a bill of lading or commercial invoice.",
          },
          {
            term: "Factoring",
            definition:
              "A type of financing where a business sells its accounts receivable to a third party, who then collects payment from the customers",
          },
          {
            term: "Supply Chain Finance",
            definition:
              "A set of solutions that optimize the flow of funds and goods throughout the supply chain, often using technology and data analytics to improve efficiency and reduce risk.",
          },
          {
            term: "Trade Credit Insurance",
            definition: "A type of insurance that protects businesses against the risk of non-payment by their customers.",
          },
          {
            term: "Documentary Credit",
            definition:
              "A type of letter of credit that requires the presentation of specific documents, such as a bill of lading or commercial invoice, to trigger payment.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
