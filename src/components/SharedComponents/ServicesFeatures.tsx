type ServicesFeaturesProps = {
    features: string[];
};

export default function ServicesFeatures({ features }: ServicesFeaturesProps){
    return(
        <div className="flex flex-row items-center font-extralight">
            <ul className="flex flex-col gap-5">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <img src="./CheckFeatureMol.svg" alt="Check icon" />
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
