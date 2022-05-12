import React from "react";

import { Hero } from "components/hero";
import { Location } from "components/location";
import { Navigation } from "components/navigation";
import { Services } from "components/services";
import { Footer } from "components/footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
