import React from "react";
import Cards from "./Cards";

const data = [
  {
    title: "Individuals",
    src: "https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/homepage.png?h=240&w=358&rev=563154e89cd04f319ce85898b00c258b&hash=3410C050D77D860AA8B88C47874AAABF",
    description:
      "Take charge of your career with the help of experienced recruiters and career advisors ready to help you find your next opportunity, evolve your skills, or take your career to the next level.",
  },
  {
    title: "Organizations",
    src: "https://www-eur-prd-lhh930-com.azureedge.net/de/en/-/media/mim-images/homepage_1.png?h=239&w=358&rev=14161cbc9b2343d0b4703e4ec233ac24&hash=60D354CE20FDD83946046D668979F220",
    description:
      "Amid economic uncertainty, evolving business needs and competing priorities, stay competitive by aligning workforce capabilities and talent strategy with our proven solutions and expert guidance.",
  },
  {
    title: "Executives",
    src: "https://www-eur-prd-lhh930-com.azureedge.net/de/en/-/media/mim-images/homepage_2.png?h=240&w=358&rev=03386d062a0549e4a11f31a54421cc63&hash=59C814C63B7D618791CCC2512E813EED",
    description:
      "Great leadership drives success. Our seasoned experts specialize in developing transformative leaders, and supporting executive search, placement, coaching or advisory opportunities.",
  },
];

const Work = () => {
  return (
    <div className="w-full h-auto px-32 py-12">
      <h1 className="text-4xl font-semibold w-4/5">
        We're here to work for you
      </h1>
      <p className="w-3/4 text-2xl text-zinc-500 mt-4">
        Whether you're an individual looking to take charge of your career, an
        organization seeking top talent solutions, or an executive in need of
        tailored support, our team specializes in empowering individuals,
        creating comprehensive talent solutions, and supporting transformative
        leaders.
      </p>
      <div className="mt-8">
        <Cards data={data} />
      </div>
    </div>
  );
};

export default Work;
