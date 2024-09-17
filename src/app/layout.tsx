import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/document";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Mohamed Aada",
    creator: "Mohamed Aada",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <header>
                <link
                    rel="icon"
                    href="./favicon.png"
                    type="image/x-icon"
                    sizes="36x36"
                ></link>
            </header>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
