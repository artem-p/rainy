import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import './Controls.css';
import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';


function Controls() {
    const [play, handlePlay] = useState(false);
    const togglePlay = () => handlePlay(!play);

    return (
        <div className="controls">
            <IconButton onClick={togglePlay}>
                {play ? <PauseCircleOutlineIcon className="controls__playButton" /> : <PlayCircleOutlineIcon className="controls__playButton"/>}
            </IconButton>
        </div>
    )
}

export default Controls
