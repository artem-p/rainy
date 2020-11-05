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
            <IconButton onClick={togglePlay} className="controls__playButton">
                {play ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
            </IconButton>
        </div>
    )
}

export default Controls
