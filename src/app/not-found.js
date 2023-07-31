"use client"
import { color } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
    return (
        <section>
            <div>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button style={{color: "red"}}>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;