import { useState } from "react";
import { FaBars, FaTimes, FaHamburger } from "react-icons/fa";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FaHamburger className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 font-bold text-xl">Burger Shack</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                  Menu
                </a>
                <a href="#" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Menu
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="bg-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">Welcome to</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Burger Shack</p>
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">Indulge in our mouthwatering burgers made with fresh ingredients and served with a smile!</p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1627662055487-551888db3aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXJ8ZW58MHx8fHwxNzEyMjQ2NjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Burger" className="h-64 w-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured burgers section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Our Specialties</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Featured Burgers</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVlc2VidXJnZXJ8ZW58MHx8fHwxNzEyMjQ2NjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cheeseburger" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Classic Cheeseburger</h3>
                  <p className="mt-2 text-gray-600">Juicy beef patty topped with melted cheese, lettuce, tomato, and our special sauce.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1591336277932-f0579b75992b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYnElMjBiYWNvbiUyMGJ1cmdlcnxlbnwwfHx8fDE3MTIyNDY2NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="BBQ Bacon Burger" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">BBQ Bacon Burger</h3>
                  <p className="mt-2 text-gray-600">Beef patty topped with crispy bacon, caramelized onions, and tangy BBQ sauce.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1520072959219-c595dc870360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWdnaWUlMjBidXJnZXJ8ZW58MHx8fHwxNzEyMjQ2NjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Veggie Burger" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Veggie Delight</h3>
                  <p className="mt-2 text-gray-600">Plant-based patty with fresh veggies and avocado spread on a whole wheat bun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Burger Shack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
