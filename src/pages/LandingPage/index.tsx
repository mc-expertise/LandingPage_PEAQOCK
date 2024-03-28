import Header from './header';
import BotSection from './BotSection';
import Statistic from './Statistic';
import Services from './Services';
import AboutUs from './AboutUs';
import Membership from './Membership';
import Cards from './Cards';
import NewsLetter from './NewsLetter';
import Footer from './footer';

const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/mainImg.jpeg')] w-full h-screen relative bg-cover flex flex-col justify-between">
        <div className="absolute inset-0 w-full h-full bg-[#205EFF] mix-blend-overlay z-10"></div>
        <Header />
        <BotSection />
      </div>
      <Statistic />
      <Services />
      <AboutUs />
      <Membership />
      <Cards />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LandingPage;
