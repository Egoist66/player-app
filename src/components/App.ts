import { Spectogram } from "./ui/Spectogram";

const H1 = ({title}: {title: string}) => {
    return `
        <h1>${title}</h1>
    `
}


export const App = () => {
    return `
        
    
        ${H1({
            title: 'Choose MP3/WAV file'
        })}
        <input type="file" id="fileInput" accept=".mp3, .wav" />
        <div class="row audio-holder">
            <audio id="audio" controls></audio>
            <label class="input-holder">Autoplay<input type="checkbox" id="autoplayToggle" checked /></label>
            ${Spectogram()}
        </div>

        <div id="scrollContainer" style="overflow-x: auto; width: 100%; border: 1px solid #ccc;">
            <canvas id="waveform"></canvas>
        </div>
        <div class="row">
            <label class="input-holder">Zoom: <input type="range" id="zoomSlider" min="1" max="4" value="1" /></label>
            <label class="input-holder">Spectrogramm columns: <input type="range" id="spectrogrammSlider" min="5" max="10" value="7" step="1" /></label>
        </div>
        <h2>Top peaks (10%):</h2>
        <div id="peaksList"></div>

        
        
        
    `;
};
