class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">
                    <img src="image/logo.jpg" alt="There is supposed to be a logo here" height="128" width="128"> </img>
                </a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a> </li>
                        <li><a href="">tbd</a> </li>
                        <li><a href="#">tbd</a> </li>
                        <li><a href="#">tbd</a> </li>
                    </ul>
                </nav>

            </header>
        `
    }
}

customElements.define ('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                &copy; 2022 Scott F. Schmelzle
            </footer>
        `
    }
}
customElements.define ('my-footer', MyFooter)
