/* eslint-disable no-unused-vars */
import Hero from "../sections/Hero";
import Category1 from "../sections/Category1";
import Category2 from "../sections/Category2";
import Category3 from "../sections/Category3";
import Deal from "../sections/Deal";
import Partner from "../sections/Partner";
import BestSell from "../sections/BestSell";
import Category4 from '../sections/Category4';


const Home = () => {
  return (
    <>
      <Hero />
      <Category1 />
      <Category2 />
      <Category3 />
      <Category4 />
      <Deal />
      <BestSell />
      <Partner />
    </>
  );
};
export default Home;