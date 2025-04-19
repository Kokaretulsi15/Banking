import React from "react";
import "./css/PersonalBanking.css";
import {
  Banknote,
  CreditCard,
  Landmark,
  PiggyBank,
  UserCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const bankingOptions = [
  {
    title: "Account Opening & Transaction History",
    description:
      "Open various accounts and view/download your transaction history securely anytime.",
    icon: <Landmark size={32} />,
    path: "/account-opening",
  },
  {
    title: "Cards",
    description:
      "Apply for debit, credit, and prepaid cards. Manage limits and get exclusive offers.",
    icon: <CreditCard size={32} />,
    path: "/cards",
  },
  {
    title: "Loans",
    description:
      "Apply for personal, home, car, or education loans. Track EMIs and loan status online.",
    icon: <Banknote size={32} />,
    path: "/loans",
  },
  {
    title: "Investments & Deposits",
    description:
      "Explore FDs, RDs, mutual funds, and create personalized investment plans.",
    icon: <PiggyBank size={32} />,
    path: "/investments",
  },
  {
    title: "Life Stage Solutions",
    description:
      "Financial services tailored to each life stage—from education to retirement.",
    icon: <UserCircle size={32} />,
    path: "/life-stage",
  },
];

const PersonalBanking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      <h1 className="grid-heading">Personal Banking</h1>
      <div className="grid-wrapper">
        {bankingOptions.map((option, index) => (
          <div
            key={index}
            className="grid-card clickable-card"
            onClick={() => navigate(option.path)}
          >
            <div className="card-icon">{option.icon}</div>
            <h2 className="card-title">{option.title}</h2>
            <p className="card-description">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalBanking;
