export default function Navbar({ setNavItem, setSelectedItem, selectedItem }: { setNavItem: (navItem: string) => void, setSelectedItem: (selectedItem: string) => void, selectedItem: string }) {

  // Function to handle click events
  const handleClick = (navItem: string) => {
     setNavItem(navItem);
     setSelectedItem(navItem);
  };
 
  return (
     <header className="w-screen h-16 bg-zinc-700">
       <nav className="h-full grid grid-cols-2 text-white">
         <div
           className={`flex justify-center items-center text-xl cursor-pointer ${selectedItem === "disscussion" ? "bg-blue-800" : ""}`}
           onClick={() => handleClick("disscussion")}
         >
           Disscussion Form
         </div>
         <div
           className={`flex justify-center items-center text-xl cursor-pointer ${selectedItem === "market" ? "bg-blue-800" : ""}`}
           onClick={() => handleClick("market")}
         >
           Market Stories
         </div>
       </nav>
     </header>
  );
 }
 