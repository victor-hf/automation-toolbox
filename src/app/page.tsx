import { NavBar } from './components/NavBar';
import ProviderCard from './components/ProviderCard';

export default function Home() {
    return (
        <section className="flex flex-col">
            <h1 className="text-4xl pt-4 pb-4 text-center mb-10">
                Choose your Marketing Automation Provider!
            </h1>
            <div id="provider-cards-container" className="flex justify-around flex-wrap gap-5">
                <ProviderCard
                    name="Emarsys"
                    logo="https://emarsys.com/app/uploads/2024/06/Emarsys-Logo-2024.svg"
                />
                <ProviderCard name="MarketingCloud" logo="https://duckduckgo.com/i/12612014.png" />
                <ProviderCard
                    name="AdobeMarketoEngage"
                    logo="https://duckduckgo.com/i/b3ad13c3.png"
                />
            </div>
        </section>
    );
}
