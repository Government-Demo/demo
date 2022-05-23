import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Container from "../../components/common/Container/HomeContainer";
import Banner from "../../components/common/Banner/Banner";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container />
      <Footer />
    </>
  );
}
export default Home;
