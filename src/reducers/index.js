import {combineReducers} from 'redux';

const songsReducer = () => {
    return  [
        {title:'Gravy Beats', duration: '3:05'},
        {title:'Katana', duration:'2:10'},
        {title:'D3MIS', duration:'4:07'},
        {title:'LoFi', duration:'10:10'}
    ];
};

const selectedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});