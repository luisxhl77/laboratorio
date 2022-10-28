import { useContext } from "react"
import { Usercontext } from "./context/userContext"

export const HomePage = () => {
    const { user } = useContext( Usercontext)

    return (
        <>
            <h1>HomePage <small>{user?.name}</small></h1>
            <hr />
            <pre aria-label="pre">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
