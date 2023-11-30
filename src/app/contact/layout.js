
import Menus from '../components/Menus';
import Footer from '../components/Footer';
export default function pagelayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
     <Menus/>
      {/* Include shared UI here e.g. a header or sidebar */}
     {children}
     <Footer/>
    </section>
  )
}