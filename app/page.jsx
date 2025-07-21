import LikeButton from "./like-button"

function Header({ title }) {
    return <h1>{title ? title : 'Title'}</h1>
}

export default function HomePage() {
    
    const names = ['Jojo', 'Abdul', 'Andy']

    return (
        <div>
            <Header title="Persons" />
            <ul>
                {names.map(name => <li key={name}>{name}</li>)}
            </ul>
            <LikeButton />
        </div>
    )

}