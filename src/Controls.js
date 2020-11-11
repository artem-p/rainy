import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import './Controls.css';
import React, {useState, useEffect} from 'react';
import { IconButton } from '@material-ui/core';
import rainSoundFile from './sound/rainfall.ogg';


function Controls() {
    const [rainSound] = useState(new Audio(rainSoundFile));
    rainSound.loop = true;
    const [play, handlePlay] = useState(false);
    
    const togglePlay = () => handlePlay(!play);

    useEffect(() => {
        play ? rainSound.play() : rainSound.pause();
    }, 
    [play, rainSound])


    return (
        <div className="controls">
            <IconButton onClick={togglePlay} className="controls__playButton">
                {play ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
            </IconButton>
        </div>
    )
}

export default Controls
