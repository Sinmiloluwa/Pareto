import Navbar from "@/components/navbar";
import HowItWorks from "@/components/howitworks";
import FinancialBenefits from "@/components/benefit";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";
import FxRiskMgtt from "@/components/fx";

export default function FxRiskMgt() {
  const stepsData = [
    {
      stepNumber: "Step 01",
      title: "Fx Risk Analysis Analysis :",
      description: `Our experts analyze your business's foreign exchange exposure to identify areas of risk, including:\n- Reviewing financial statements and transactions\n- Analyzing industry, market trends, and economic conditions\n- Identifying potential risks associated with exchange rate fluctuations`,
      bgColor: "bg-accent",
      textColor: "text-primary",
      roundedStyle: "rounded-tr-[120px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 02",
      title: "Customized Risk Management Strategies :",
      description:
        "We develop customized risk management strategies to mitigate risks, including hedging to lock in exchange rates, diversifying currency holdings, transferring foreign exchange risk to a third party.",
      bgColor: "bg-nw1",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
    {
      stepNumber: "Step 03",
      title: "Ongoing Monitoring and Support :",
      description:
        "We provide ongoing monitoring and support, including regular risk assessments, market analysis and insights, strategy adjustments, and compliance and regulatory support.",
      bgColor: "bg-nw2",
      textColor: "text-primary",
      roundedStyle: "rounded-br-[118px]",
      customHeight: "min-h-[400px]",
    },
  ];

  const formatDescription = (description) => {
    return description.split("\n").map((item, index) => (
      <span key={index} className="block mb-2">
        {item}
      </span>
    ));
  };

  return (
    <div>
      <Navbar />
      <FxRiskMgtt />
      <HowItWorks
        steps={stepsData.map((step) => ({
          ...step,
          description: formatDescription(step.description),
        }))}
      />{" "}
      <FinancialBenefits
        title="Benefits"
        subheading="Mitigating Risk, Ensuring Stability"
        benefits={[
          "Reduced risk of exchange rate losses",
          "Improved financial stability",
          "Increased confidence in international trade",
          "Competitive exchange rates",
        ]}
        image="/assets/n.png"
      />{" "}
      <Glossary
        title="Glossary"
        description="Understanding the terminology related to Foreign Exchange Risk Management is crucial for making informed decisions. Here are some essential terms to get you started"
        items={[
          {
            term: "Hedging",
            definition:
              "A strategy to reduce or eliminate currency risk by taking positions in the FX market.",
          },
          {
            term: "Forward Contract",
            definition:
              "A customized contract to buy or sell a currency at a fixed exchange rate on a specific date.",
          },
          {
            term: "Exposure",
            definition:
              "The extent to which a company is affected by changes in exchange rates.",
          },
          {
            term: "Spot Rate",
            definition: " The current exchange rate for a currency pair.",
          },
          {
            term: "Swap",
            definition:
              "A contract to exchange principal and interest payments in different currencies.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
