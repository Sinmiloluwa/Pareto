import Navbar from "@/components/navbar";
import HowItWorks from "@/components/howitworks";
import FinancialBenefits from "@/components/benefit";
import Glossary from "@/components/glossary";
import Footer from "@/components/footer";
import Currency from "@/components/currency";

export default function CurrencyConversion() {
    const stepsData = [
      {
        stepNumber: "Step 01",
        title: "Account Opening :",
        description: `A. Application: Submit an application to open a currency account with Paretopay.\nB. Verification: Provide required documents and information to verify your business identity.\nC. Approval: Receive approval and account activation.`,
        bgColor: "bg-accent",
        textColor: "text-primary",
        roundedStyle: "rounded-tr-[120px]",
        customHeight: "min-h-[400px]",
      },
      {
        stepNumber: "Step 02",
        title: "Deposit and Withdrawal :",
        description: `A. Deposit: Fund your currency account by transferring funds from your local bank account or other currency accounts.\nB. Withdrawal: Withdraw funds from your currency account to your local bank account or other currency accounts.`,
        bgColor: "bg-nw1",
        textColor: "text-primary",
        roundedStyle: "rounded-br-[118px]",
        customHeight: "min-h-[400px]",
      },
      {
        stepNumber: "Step 03",
        title: "Currency Conversion :",
        description: `A.Exchange Rate: Get competitive exchange rates for converting one currency to another.\nB. Conversion: Convert funds from one currency to another using the current exchange rate.\nC. Settlement: Receive the converted funds in your currency account`,
        bgColor: "bg-nw2",
        textColor: "text-primary",
        roundedStyle: "rounded-br-[118px]",
        customHeight: "min-h-[400px]",
      },
      {
        stepNumber: "Step 04",
        title: "Tracking and Updates :",
        description: `A. Account Dashboard: Access your account dashboard to view real-time balances, transactions, and exchange rates.\nB. Transaction Tracking: Track the status of your transactions, including deposits, withdrawals, and conversions.\n.C. Alerts and Notifications: Receive alerts, notifications for account activity, exchange rate changes, and transaction updates.`,
        bgColor: "bg-accent",
        textColor: "text-primary",
        roundedStyle: "rounded-tr-[120px]",
        customHeight: "min-h-[400px]",
      },
    ];
  
    const formatDescription = (description) => {
      return description.split("\n").map((item, index) => (
        <span key={index} className="block mb-2">{item}</span>
      ));
    };
    
  
    return (
      <div>
        <Navbar />
        <Currency />
        <HowItWorks steps={stepsData.map((step) => ({
        ...step,
        description: formatDescription(step.description),
      }))} />
        <FinancialBenefits
          title="Benefits"
          subheading="Unlock Efficient Financial Solutions"
          benefits={[
            "Easy account management",
            "Multi-currency support",
            "Real-time transactions",
            "Low fees",
          ]}
          image="/assets/Frame 1171280282 (1).png"
        />
        <Glossary
          title="Glossary"
          description="Currency Account can be complex, and understanding the terminology is crucial to making informed decisions. Here are some possible glossary terms that might be relevant for a currency account platform"
          items={[
            { term: "Virtual Business Account ", definition: "A digital account that allows businesses to manage their finances, make transactions, and track their expenses online." },
            { term: "Banking as a Service (BaaS)", definition: "A model that allows businesses to access banking services, such as account management and payment processing, through a third-party provider." },
            { term: "Multi-Currency Support", definition: "The ability to hold and manage multiple currencies in a single account, allowing businesses to easily conduct international transactions." },
            { term: "IBAN (International Bank Account Number)", definition: "A unique identifier for a bank account used for international transactions." },
            { term: "SWIFT Code (Society for Worldwide Interbank Financial Telecommunication Code)", definition: "An 8- or 11-character code that identifies a bank and its branch for international transactions." },
          ]}
        />
        <Footer />
      </div>
    );
  }
  