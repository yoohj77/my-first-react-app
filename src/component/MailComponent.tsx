import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import { useState } from 'react';

interface MailCompoentProps {
    children?: JSX.Element[] | JSX.Element | string;
    menuName: string;
    isInbox: boolean;
}

const MailComponent = ({ menuName, isInbox }: MailCompoentProps) => {

    return (
        <div className='App-toolbar'>
            <div style={{ marginTop: '10px', marginLeft: '16px', marginRight: '10px' }}>
                {isInbox ? <InboxIcon /> : <MailIcon />}
            </div>
            <div style={{ fontSize: 16, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                {menuName}
            </div>
        </div>
    );
}

export default MailComponent;
