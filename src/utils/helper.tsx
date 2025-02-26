import realTimeMarket from "../../public/assets/images/webp/real-time-market.webp";
import advanceTrading from "../../public/assets/images/webp/advance-trading.webp";
import mastering from "../../public/assets/images/webp/mastering.webp";
import risk from "../../public/assets/images/webp/risk-management.webp";
import diversified from "../../public/assets/images/webp/diversified-portfolio.webp";
import psychology from "../../public/assets/images/webp/psychology.webp";
import darrell from "../../public/assets/images/webp/darrell.webp";
import jerome from "../../public/assets/images/webp/jerome.webp";
import eleanor from "../../public/assets/images/webp/eleanor.webp";
import leslie from "../../public/assets/images/webp/leslie.webp";
import wade from "../../public/assets/images/webp/wade.webp";
import kristin from "../../public/assets/images/webp/kristin.webp";
import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
  Twitter,
  Youtube,
} from "./icons";

interface SocialIconsProps {
  svgClass: string;
}

export const TRADE_LIST = [
  {
    title: "SDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    stock: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "SDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    stock: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "SDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    stock: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    stock: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    stock: "143.651 / 143.637",
  },
  {
    title: "US30",
    stock: "41048.38 / 41044.58",
  },
];

export const HEADER_LIST = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Learn to trade",
    link: "#learn",
  },
  {
    title: "Promotions",
    subtitleOne: "link one",
    subtitleTwo: "link two",
  },
  {
    title: "Arrowtrade",
    link: "#arrowtrade",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
];

export const BLOG_CARDS_LIST = [
  {
    image: realTimeMarket,
    imageAlt: "real-time-market",
    cardDate: "31 Jan 2025",
    buttonText: "3 min read",
    title: "Real-Time",
    spanTitle: "Market Insights",
    description:
      "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
    profileImage: darrell,
    profileImageAlt: "darrell",
    profileName: "Darrell Steward",
    isFeatured: true,
  },
  {
    image: advanceTrading,
    imageAlt: "advance-trading",
    cardDate: "29 Jan 2025",
    buttonText: "7 min read",
    title: "Advanced Trading",
    spanTitle: "Platform",
    description:
      "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
    profileImage: jerome,
    profileImageAlt: "jerome",
    profileName: "Jerome Bell",
    isFeatured: true,
  },
  {
    image: mastering,
    imageAlt: "mastering",
    cardDate: "20 Dec 2024",
    buttonText: "4 min read",
    title: "Mastering The",
    spanTitle: "Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    profileImage: eleanor,
    profileImageAlt: "eleanor",
    profileName: "Eleanor Pena",
    isFeatured: true,
  },
  {
    image: risk,
    imageAlt: "risk-management",
    cardDate: "17 Nov 2024",
    buttonText: "5 min read",
    title: "Risk Management",
    spanTitle: "In Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    profileImage: leslie,
    profileImageAlt: "leslie",
    profileName: "Leslie Alexander",
    isFeatured: true,
  },
  {
    image: diversified,
    imageAlt: "diversified-portfolio",
    cardDate: "22 Oct 2024",
    buttonText: "2 min read",
    title: "Building A Diversified",
    spanTitle: "Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    profileImage: wade,
    profileImageAlt: "wade",
    profileName: "Wade Warren",
    isFeatured: false,
  },
  {
    image: psychology,
    imageAlt: "psychology",
    cardDate: "27 Sep 2024",
    buttonText: "6 min read",
    title: "The Phychology Of",
    spanTitle: "Trading",
    description:
      "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
    profileImage: kristin,
    profileImageAlt: "kristin",
    profileName: "Kristin Watson",
    isFeatured: false,
  },
  {
    image: realTimeMarket,
    imageAlt: "real-time-market",
    cardDate: "31 Jan 2025",
    buttonText: "3 min read",
    title: "Real-Time",
    spanTitle: "Market Insights",
    description:
      "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
    profileImage: darrell,
    profileImageAlt: "darrell",
    profileName: "Darrell Steward",
    isFeatured: false,
  },
  {
    image: advanceTrading,
    imageAlt: "advance-trading",
    cardDate: "29 Jan 2025",
    buttonText: "7 min read",
    title: "Advanced Trading",
    spanTitle: "Platform",
    description:
      "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
    profileImage: jerome,
    profileImageAlt: "jerome",
    profileName: "Jerome Bell",
    isFeatured: false,
  },
  {
    image: mastering,
    imageAlt: "mastering",
    cardDate: "20 Dec 2024",
    buttonText: "4 min read",
    title: "Mastering The",
    spanTitle: "Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    profileImage: eleanor,
    profileImageAlt: "eleanor",
    profileName: "Eleanor Pena",
    isFeatured: false,
  },
  {
    image: risk,
    imageAlt: "risk-management",
    cardDate: "17 Nov 2024",
    buttonText: "5 min read",
    title: "Risk Management",
    spanTitle: "In Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    profileImage: leslie,
    profileImageAlt: "leslie",
    profileName: "Leslie Alexander",
    isFeatured: false,
  },
  {
    image: diversified,
    imageAlt: "diversified-portfolio",
    cardDate: "22 Oct 2024",
    buttonText: "2 min read",
    title: "Building A Diversified",
    spanTitle: "Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    profileImage: wade,
    profileImageAlt: "wade",
    profileName: "Wade Warren",
    isFeatured: false,
  },
  {
    image: psychology,
    imageAlt: "psychology",
    cardDate: "27 Sep 2024",
    buttonText: "6 min read",
    title: "The Phychology Of",
    spanTitle: "Trading",
    description:
      "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
    profileImage: kristin,
    profileImageAlt: "kristin",
    profileName: "Kristin Watson",
    isFeatured: false,
  },
];

export const FOOTER_LINK_LIST = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#about",
  },
  {
    title: "How It Works",
    link: "#how-it-works",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "FAQs",
    link: "#faq",
  },
  {
    title: "Contact Us",
    link: "#contact-us",
  },
];

export const FOOTER_CONTENT_LIST = [
  {
    title: "Trade Responsibility Disclaimer",
    description:
      "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
  },
  {
    title: "Disclaimer",
    description:
      "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
  },
];

export const FOOTER_SOCIAL_ICON_LIST = ({ svgClass }: SocialIconsProps) => [
  {
    icon: <Facebook myClass={`${svgClass}`} />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <Instagram myClass={`${svgClass}`} />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <Youtube myClass={`${svgClass}`} />,
    link: "https://www.youtube.com/",
  },
  {
    icon: <Tiktok myClass={`${svgClass}`} />,
    link: "https://www.tiktok.com/",
  },
  {
    icon: <Twitter myClass={`${svgClass}`} />,
    link: "https://www.twitter.com/",
  },
  {
    icon: <Linkedin myClass={`${svgClass}`} />,
    link: "https://www.linkedin.com/",
  },
];

export const MARKET_INSIGHTS_LIST = [
  {
    title: "Real-Time Analytics",
    description:
      "AI can process and analyze data from various sources, such as financial statements, price movements, market sentiment, and even social media trends, providing instant feedback and analysis.",
  },
  {
    title: "News Updates",
    description:
      "AI tools can sift through the noise of constant news flows and pinpoint stories that are most relevant to your investments. Whether it’s economic reports, geopolitical events, or corporate announcements, AI can identify which developments are likely to move markets.",
  },
  {
    title: "Expert Market Research",
    description:
      "Advanced algorithms can synthesize historical data with current market trends to forecast potential outcomes, offering the insights of seasoned market experts at your fingertips.",
  },
];

export const CHANGING_THE_GAME = [
  {
    title: "Faster Decision-Making",
    description:
      "In the world of trading and investing, speed is critical. AI systems can analyze millions of data points in seconds, giving you an edge in making quick decisions. For example, when news breaks about a company’s earnings report, AI systems can immediately assess the market’s reaction and provide insights on whether it's a buying or selling opportunity.",
  },
  {
    title: "Enhanced Accuracy And Predictive Power",
    description:
      "Human traders and investors are often prone to cognitive biases, such as overconfidence or emotional decision-making. AI removes these limitations by relying solely on data and algorithms. With machine learning, AI can improve over time, identifying patterns and trends that humans may overlook. This leads to more accurate predictions about market movements, asset prices, and investment risks.",
  },
  {
    title: "Customized Insights For Individual Strategies",
    description:
      "AI-driven analytics can tailor insights to your specific trading or investment strategy. Whether you’re a day trader looking for short-term opportunities or a long-term investor analyzing market fundamentals, AI can filter out irrelevant information and deliver insights that align with your goals. This level of personalization was previously unavailable in traditional market research.",
  },
];

export const AI_DRIVEN_LIST = [
  "Real-Time Analytics",
  "News Updates",
  "Expert Market Research",
];

export const CHANGING_LIST = [
  "Faster Decision-Making",
  "Enhanced Accuracy and Predictive Power",
  "Customized Insights for Individual Strategies",
];
