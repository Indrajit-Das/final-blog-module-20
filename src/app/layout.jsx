import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jhaluri Blog Media",
    description: "Welcome to Jhalmuri Blog World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader height={2} color="#ffc107" />
                {children}
            </body>
        </html>
    );
}
