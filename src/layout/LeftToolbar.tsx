import MailComponent from "../component/MailComponent";

interface ToolbarProps {
    children?: JSX.Element[] | JSX.Element | string;
}

function LeftToolbar({ }: ToolbarProps) {

    const firstMenuList = [
        { isInbox: true, menuName: 'Inbox', index: 1 },
        { isInbox: false, menuName: 'Starred', index: 2 },
        { isInbox: true, menuName: 'SendEmail', index: 3 },
        { isInbox: false, menuName: 'Drafts', index: 4 }
    ];
    const secondMenuList = [
        { isInbox: true, menuName: 'All mail', index: 1 },
        { isInbox: false, menuName: 'Trash', index: 2 },
        { isInbox: true, menuName: 'Spam', index: 3 }
    ];

    return (
        <div className='App-leftView'>
            {firstMenuList.map((item) => {
                return (
                    <div key={item.index} >
                        <MailComponent menuName={item.menuName} isInbox={item.isInbox} />
                    </div>)

            })}
            <div style={{ borderTop: '1px solid lightgrey' }}></div>
            {secondMenuList.map((item) => {
                return (
                    <div key={item.index} >
                        <MailComponent menuName={item.menuName} isInbox={item.isInbox} />
                    </div>)

            })}
        </div>
    );
}

export default LeftToolbar;
