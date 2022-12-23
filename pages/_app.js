import './styles.css'; 
import { CartProvider } from '../context/cart';

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
export default App;
