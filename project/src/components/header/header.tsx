import HeaderLeft from '../header-left/header-left';
import HeaderAuth from '../header-nav/header-auth';
import { AuthorizationStatus } from '../../consts';
import HeaderNoAuth from '../header-nav/header-no-auth';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLeft />
          {authorizationStatus === AuthorizationStatus.Auth ? <HeaderAuth /> : <HeaderNoAuth />}
        </div>
      </div>
    </header>
  );
}

export default Header;
