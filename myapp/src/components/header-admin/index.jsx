import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined} from '@ant-design/icons';
import "./index.scss";
function Header() {



    return (
        <header className="header-admin">
            <div className="header__logo">
                <Link to="/">
                    <img src="logo.png"
                        alt=""
                        width={200}
                    />
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <div className="sbv">
                        <li>
                            <Link to="/">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="/promotion-management">Quản lý khuyến mãi</Link>
                        </li>
                        <li>
                            <Link to="/">Về Chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/dashboardpage">Quản lý</Link>
                        </li>
                    </div>
                    <div className="header__icon">
                        <li>
                            <SearchOutlined />
                        </li>
                        <li>
                            <UserOutlined />
                        </li>
                    </div>
                </ul>
            </nav>
            
        </header>
    )


}

export default Header;