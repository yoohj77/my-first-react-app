
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    children?: JSX.Element[] | JSX.Element | string;
    isClosed: boolean;
    closeEvent: (arg0: boolean) => void;
}

function Header(props: HeaderProps) {
    return (
        <div className='App-header'>
            {props.isClosed ? <MenuIcon className='App-drawerButton' onClick={() => { props.closeEvent(false) }} /> : ''}
            < div style={{ marginLeft: '10px' }}>
                Drawer
            </div >
        </div >
    );
}

export default Header;
