export default function About(){
    return(
        <div className="p-8">
            <h1 className="absolute left-[-40px] text-10xl font-bold"> 
                About 
            </h1>
            <div className="relative mt-40 max-w-2xl ml-auto -mr-20 text-base sm:text-lg leading-relaxed space-y-6">
                <p className="mix-blend-difference">
                    This is a simple web application designed to streamline <br/>
                    the process of generating budgets for website development services.
                </p>
                <p className="mix-blend-difference"> 
                    Whether you're offering SEO, Ads setup, or full website development, <br/>
                    this tool allows you to select services, customize parameters, <br/>
                    and get an instant estimated price.
                </p>
                <p className="mix-blend-difference"> 
                    It was created as a personal project to explore front-end architecture, <br/> 
                    and form interactions while solving a common freelance/agency need: <br/>
                    quick and clear project estimation.
                </p>
            </div>
        </div>
    );
}