import Navbar from "@/components/navbar";
import HowItWorks from "@/components/howitworks";
import FinancialBenefits from "@/components/benefit";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";
import Liquidity from "@/components/liquidity";

export default function LiquidityProvision() {
  const stepsData = [
    {
      stepNumber: "Step 01",
      title: "Cash Flow Analysis:",
      description:
        "Our team of experts will conduct a thorough analysis of your business's cash flow. This involves reviewing your financial statements, invoices, and other relevant documents to identify areas of improvement. We'll examine your cash inflows and outflows, accounts receivable and payable, and other key metrics to understand your business's unique cash flow dynamics.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 02",
      title: "Short-Term Funding Options :",
      description:"Based on our analysis, we'll provide access to short-term funding options that meet your business needs. This may include overdraft facilities, short-term loans, or other financing solutions that can help address immediate cash flow gaps. ",
      bgColor: "bg-nw1",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 03",
      title: "Cash Flow Management :",
      description:
        "Our team will work closely with you to develop a customized cash flow management strategy that aligns with your business goals and objectives. We'll help you create a comprehensive plan that takes into account your cash flow projections, payment terms, and other key factors.",
      bgColor: "bg-nw2",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 04",
      title: "Liquidity Optimization :",
      description:
        "In the final step, we'll help you refine your liquidity by identifying opportunities to enhance your cash flow management. This may involve implementing new financial processes, streamlining your accounts receivable and payable, or exploring alternative financing options. Our goal is to help you achieve optimal liquidity, reduce financial stress.",
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
  ];
  return (
    <div>
      <Navbar />
      <Liquidity/>
      <HowItWorks steps={stepsData} />
      <FinancialBenefits
        title="Benefits"
        subheading='Reduced Financial Stress'
        benefits={[
          "Efficient cash flow management",
          "Reduced risk of cash flow crises",
          "Improved financial flexibility",
          "Increased confidence in business operations",
        ]}
        image="/assets/Frame 1171280282 (2).png"
      />{" "}
      <Glossary
        title="Glossary"
        description="Understanding the terminology related to liquidity provision is essential for making informed decisions. Here are some key terms to get you started:"
        items={[
          {
            term: "Overdraft Facility",
            definition:
              " A type of short-term funding that allows a business to borrow money from a bank or other lender up to a certain limit.",
          },
          {
            term: "Short-Term Funding",
            definition:
              "Funding that is provided for a short period of time, typically less than a year, to help a business meet its immediate cash flow needs.",
          },
          {
            term: "Cash Inflows",
            definition:
              "The amount of money that a business receives from its customers, investors, or other sources.",
          },
          {
            term: "Cash Outflows",
            definition:
              "The amount of money that a business spends on its operations, investments, and other expenses.",
          },
          {
            term: "Cash Flow Management",
            definition: "The process of managing a business's cash inflows and outflows to ensure it has sufficient liquidity to meet its financial obligations.",
          },
      
        ]}
      />


      <Footer/>
    </div>
  );
}
