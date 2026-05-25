import Container from "./components/layout/Container";
import Mobile from "./components/layout/Mobile";

function App() {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-white p-1 dark:bg-[#212121] lg:px-12 lg:py-8 pr-4">

            {/* Mobile */}
            <div className="block h-full w-full lg:hidden">
                <Mobile />
            </div>

            {/* Desktop */}
            <div className="hidden h-full w-full lg:block">
                <Container />
            </div>

        </div>
    );
}

export default App;