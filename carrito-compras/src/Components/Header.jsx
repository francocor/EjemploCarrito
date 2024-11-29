import "../Css/Header.css"

const Header = () => {
  return (
    <div>
        <header className="header">
      <nav className="navbar">
        <h1 className="logo">Mi Tienda</h1>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li>
            Categorías
            <select className="category-dropdown">
              <option value="todos">Todos</option>
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
            </select>
          </li>
          <li>
            <a href="/cart" className="cart-icon">🛒</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header