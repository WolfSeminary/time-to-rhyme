import RhymesList from "./RhymesList";
import WordToRhyme from "./WordToRhyme";
import FindRhyme from "./FetchRhymes";
import WriteSong from "./WriteSong";
import NumOfSyllables from "./NumOfSyllables";
import BackGround from "./BackGround";
import PrintSong from "./PrintSong";

export default function HomePage() {
    const [wordToRhyme, setWordToRhyme] = useState();
    const [currentRhymesRange, setCurrentRhymesRange] = useState(0)

    const [rhymes, setRhymes] = useState([]);
    const [song, setSong] = useState();
    const [numOfSyllables, setNumOfSyllables] = useState(0)
    const [selectedBackground, setSelectedBackground] = useState("");
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    const onPrintSongClick = () => {
        setShouldShowThankYouModal(true);
    }
    const onBackgroundChange = (e) => {
        setSelectedBackground(e.target.value);
    };
    const onNumOfSyllablesChange = (e) => {
        setNumOfSyllables(e.target.value);
    }
    const onClearSongClick = () => {
        setSong('');
    }
    const onWriteSong = (e) => {
        setSong(e.target.value);
    }
    const fetchRhymes = () => {
        let word = wordToRhyme;
        fetch('https://rhymebrain.com/talk?function=getRhymes&word=' + word)
            .then(res => res.json())
            .then(res => {
                setRhymes(res.items);
                setCurrentRhymesRange(10)
            })
    }
    const onCloseModal = () => {
        setShouldShowThankYouModal(false);
    }
    const onWordToRhymeChange = (event) => {
        setWordToRhyme(event.target.value);
    }
    return <div><RhymesList arrOfRhymes={rhymes} />
        <WordToRhyme onChange={onWordToRhymeChange} />
        <FindRhyme onClick={fetchRhymes} />
        <WriteSong onChange={onWriteSong} />

        <ClearSong onClick={onClearSongClick} />
        <NumOfSyllables onChange={onNumOfSyllablesChange} />
        <BackGround onChange={onBackgroundChange} />
        <PrintSong onClick={onPrintSongClick} onClose={onCloseModal} open={shouldShowThankYouModal} />

    </div>
};