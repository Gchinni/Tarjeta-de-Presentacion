import React from "react";
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

export default function Card() {
    return(
        <div className="card rounded-3">
            <Header />
            <Content />
            <Footer />

        </div>
    )
}