
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

interface TopbuttonProps {
    children?: JSX.Element[] | JSX.Element | string;
    closeEvent: (arg0: boolean) => void;
}

const TopButton = (props: TopbuttonProps) => {
    return (
        <div className='App-topButtonLayer'
            onClick={() => props.closeEvent(true)}
        >
            <ChevronLeftIcon className='App-topButton' />
        </div>
    );
}

export default TopButton;
