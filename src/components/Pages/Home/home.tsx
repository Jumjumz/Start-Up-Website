import Hero from "../../Hero/hero";
import Howitwork from "../../HowItWork/howitwork";
import Computer from "../../Computer/computer";
import Phone from "../../Phone/phone";
import Footer from "../../Footer/footer";
import Sponsors from "../../Sponsors/sponsors";
import Clients from "../../Clients/clients";
import Codelink from "../../Codelink/codelink";
import {
  FadeLeft,
  FadeRight,
  MoveUp,
  ShowUp,
  MoveDown,
} from "../../Reveal/reveal";

export default function home() {
  return (
    <>
      <FadeLeft>
        <Hero />
      </FadeLeft>
      <FadeRight>
        <Howitwork />
      </FadeRight>
      <FadeLeft>
        <Computer />
      </FadeLeft>
      <MoveUp>
        <Phone />
      </MoveUp>
      <ShowUp>
        <Sponsors />
      </ShowUp>
      <MoveDown>
        <Clients />
      </MoveDown>
      <Footer />
      <Codelink />
    </>
  );
}
