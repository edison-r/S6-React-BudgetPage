export default function BudgetCard({ budget }: any){
    return(
        <div className="flex flex-row justify-between text-2xl">
            <div className="font-[DotGothic16]">
                <p className="font-[Inter] text-5xl font-bold">{budget.name}</p>
                <p className="py-1">{budget.email}</p>
                <p className="py-1">{budget.phone}</p>
            </div>
            <div>
                <p className="font-bold">Services purchased</p>
                <ul className="font-extralight">
                    {budget.services.seo && <li>SEO</li>}
                    {budget.services.ads && <li>ADS</li>}
                    {budget.services.web.selected && (
                    <>
                        <p>WEB <span className="text-xl">({budget.services.web.pages} pages, {budget.services.web.languages} languages)</span></p>
                    </>
                    )}
                </ul>
            </div>
            <div>
                <p className="font-bold">Total:</p>
                <p className="text-4xl font-bold">{budget.total}€</p>
            </div>
        </div>
    );
}