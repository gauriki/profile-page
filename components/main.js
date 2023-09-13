import { BackgroundImgCard } from "./backgroundImgCard";
import { BioGraphyCard } from "./bioGraphyCard";
import { Footer } from "./footer";
import { FormCard } from "./formCard";
import { Header } from "./header";
import { ImageCard } from "./imageCard";
import { ServiceCard } from "./serviceCard";

export function Main() {
  return (
    <main className="container mx-auto h-fit min-h-screen">
      <Header />
      <ImageCard />
      <BioGraphyCard />
      <ServiceCard />
      <BackgroundImgCard />
      <FormCard />
      <Footer />
    </main>
  );
}
