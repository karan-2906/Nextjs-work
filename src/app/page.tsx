'use client';
import ProductsPage from "./products/page"
// import { useDarkMode } from '../components/darkmode/useDarkMode';

export default function Home() {
  // const { darkMode } = useDarkMode();

  return (
    <div className={`container mx-auto `}>
      <div className="bg-white dark:bg-black">
        <ProductsPage />
      </div>
    </div>
  )
}