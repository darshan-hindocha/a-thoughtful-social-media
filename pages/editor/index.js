import Container from "../../Components/Container";
import Link from "../../Components/Link";

export default function Editor() {
    return (
        <Container>
            <div className="flex flex-col gap-10 text-center py-4">
                <h2>Editor</h2>
                <p>
                    View your published and unpublished content.
                </p>
            </div>
        </Container>
    )
}