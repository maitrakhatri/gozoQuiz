import { Navbar, Thumbnail } from "../Components"

export const Homepage = () => {

    type CategoryDetails = {
        name: string;
        src: string
    }

    const categories: Array<CategoryDetails> = [
        {
            name: "Superheroes",
            src: "./assets/superheroes.jpg"
        },
        {
            name: "Books",
            src: "./assets/books.jpg"
        },
        {
            name: "Movies",
            src: "./assets/movies.jpg"
        },
        {
            name: "Computers",
            src: "./assets/computers.jpg"
        },
        {
            name: "Anime and Manga",
            src: "./assets/anime.jpg"
        }
    ]
    return (
        <>
            <Navbar />
            <main id="homepage">
                <div className="typewriter">
                    <p className="heading text-xl"> Aa dekhe zara, kisme kitna hai dum !!</p>
                </div>

                <div className="all-quizes">
                    {categories.map(({name, src}) => <Thumbnail name={name} src={src} />)}
                </div>
            </main>
        </>
    )
}