import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import { About, Blog, Contact, Home, Menu } from "./pages";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
