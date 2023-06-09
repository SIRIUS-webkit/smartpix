import { Metadata } from "next";
import HomeSection from "@/components/HomeSection";
import ProdcutCase from "@/components/ProdcutCase";
import AppShowcase from "@/components/AppShowcase";
import AccordionList from "@/components/AccordionList";

export const metadata: Metadata = {
  title:
    "SmartPix: Empowering AI-Powered Creativity with Text-to-Image Generation, Object Detection, Image Classification, and Model Training",
  description:
    "Unlock the potential of AI with SmartPix - a cutting-edge platform that harnesses the power of artificial intelligence. Transform text into stunning images, detect objects with precision, classify images accurately, and train models effortlessly. Explore the limitless possibilities of AI-driven creativity with SmartPix.",
  icons: {
    icon: "/newlogo.png",
  },
  openGraph: {
    title:
      "SmartPix: Empowering AI-Powered Creativity with Text-to-Image Generation, Object Detection, Image Classification, and Model Training",
    description:
      "Unlock the potential of AI with SmartPix - a cutting-edge platform that harnesses the power of artificial intelligence. Transform text into stunning images, detect objects with precision, classify images accurately, and train models effortlessly. Explore the limitless possibilities of AI-driven creativity with SmartPix.",
    url: "https://smartpix.vercel.app/",
    images: [
      {
        url: "/smartpixmeta.png",
        width: 1200,
        height: 628,
        alt: "smartpix",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

interface AccordionListProps {
  id: number;
  title: string;
  text: string;
}

export default function Home() {
  const accordLists: AccordionListProps[] = [
    {
      id: 1,
      title: "Are there any new features or updates coming soon?",
      text: "Yes, we are always developing new features and upgrades to enhance your experience on our platform. You can expect improvements to creation quality, new social features, and perhaps new input/output formats in future editions. We're constantly working to make our platform more interesting and user-friendly, so check back for updates on our most recent advancements. We appreciate your constant support and look forward to providing you with the best possible experience.",
    },
    {
      id: 2,
      title: "How do I give feedback?",
      text: "We are continually striving to provide our users with an exceptional app experience. We value your intelligent comments and recommendations. Please contact us at support@smartpix.com with your valuable feedback, and someone from our staff will respond.",
    },
    {
      id: 3,
      title: "How Long Will It Take Me to Create Text To Image?",
      text: "It depends on the complexity of the artwork, but creating a Text-to-Image normally takes 8 seconds. If you are a premium user, the creation time with greater resolution is less than 5 seconds. However, it also depends on a person's graphic design experience as well as the size and complexity of the project.",
    },
    {
      id: 4,
      title: "Can I Customize the Image Generated by the AI Image?",
      text: "Yes, the AI Image can be customized. To do so, you must subscribe to a premium plan on our site.",
    },
  ];
  return (
    <div className=" min-h-screen">
      <div className="bg-main-bg-gradient">
        <HomeSection />
      </div>

      <div className="max-w-6xl mdmin1050:mx-auto mx-5">
        <ProdcutCase />
      </div>
      <AppShowcase />
      <div className="max-w-6xl mx-auto">
        <div className="mdmin1050:max-w-[80%] max-w-full mdmin1050:mx-auto mx-5 pb-[6em]">
          <h2 className="text-center font-bold mb-[2em]">
            Frequently Asked Questions
          </h2>
          <AccordionList data={accordLists} />
        </div>
      </div>
    </div>
  );
}
