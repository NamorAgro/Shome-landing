
import EcoImage from "./imagesCompoents/ecoImage"

import EcoText from "./textComponents/ecoText"

export default function EcoBlock() {
  return (
    <>
        <section id="eco" className="relative section-screen bg-cover overflow-x-hidden">
            <EcoImage></EcoImage>
            <EcoText></EcoText>
        </section>
    </>
  )
}
