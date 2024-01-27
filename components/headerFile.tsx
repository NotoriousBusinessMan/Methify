export default function headerFile(){
    return (
        <>
            <header className="flex justify-between items-center px-20 py-8 bg-cyan-400">
                <div className="left">
                    <h1 className="font-bold text-3xl text-stone-950">Methify</h1>
                </div>

                <div className="center">
                    <ul className="flex justify-between items-center">
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Home</a></li>
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Latest</a></li>
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Trending</a></li>
                        <li className="text-stone-950 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Offers</a></li>
                    </ul>
                </div>

                <div className="right flex justify-between items-center">
                    <a className="text-stone-950 not-special-button mr-10" href="/signin">Sign In</a>
                    <a className="text-stone-950 special-button" href="/login">Log In</a>
                </div>
            </header>
        </>
    )
}