import HeaderLogin from "../../components/common/HeaderLogin/Header";
import Footer from "../../components/common/Footer/Footer";
import Container from "../../components/common/Container/HomeContainer";
import Banner from "../../components/common/Banner/Banner";
function Home() {
  return (
    <>
      <HeaderLogin />
      <Banner />
      <Container />
      <Footer />
    </>
  );
}
export default Home;
