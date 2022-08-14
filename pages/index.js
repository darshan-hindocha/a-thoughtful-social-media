import Container from "../Components/Container";
import Link from '../Components/Link';

export default function Home() {
    return (
        <Container>
            <div className="flex flex-col gap-16 text-center py-4">
                <h2>Welcome to <span className="text-red-700">CREDIT</span></h2>
                <p>
                    Please log-in or sign-up below.
                </p>
                <div className="flex justify-around py-10">
                    <button className="px-4 p-2 rounded-md bg-red-400 hover:bg-red-300">
                        <Link href="/">Login</Link>
                    </button>
                    <button className="px-4 p-2 rounded-md bg-blue-400 hover:bg-blue-300">
                        <Link href="/">Sign-up</Link>
                    </button>
                </div>
            </div>
        </Container>
    )
}
