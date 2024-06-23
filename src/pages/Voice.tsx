import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Voice.css';

const API_KEY = 'sk0Y4-IrxVJSOmP2V7umwEeUnxyWqCbvHSK4LzLRaAQ7yz4-_p6Mez3WTjD8-Bl0';
const LANGUAGES = [
  { sourceLanguage: "bn", name: "Bengali" },
  { sourceLanguage: "en", name: "English" },
  { sourceLanguage: "gu", name: "Gujarati" },
  { sourceLanguage: "hi", name: "Hindi" },
  { sourceLanguage: "kn", name: "Kannada" },
  { sourceLanguage: "ml", name: "Malayalam" },
  { sourceLanguage: "mr", name: "Marathi" },
  { sourceLanguage: "or", name: "Odia" },
  { sourceLanguage: "pa", name: "Punjabi" },
  { sourceLanguage: "sa", name: "Sanskrit" },
  { sourceLanguage: "ta", name: "Tamil" },
  { sourceLanguage: "te", name: "Telugu" },
  { sourceLanguage: "ur", name: "Urdu" }
];

const QUESTIONS = [
  "What is the shop name?",
  "What is the seller state?",
  "What is the product language?",
  "What is the product category?",
  "What is the product name?",
  "What is the price of the product?",
  "What is the product description?",
  "What are the product variations?"
];

function App() {
  const [language, setLanguage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [responses, setResponses] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const audioRef = useRef(null);
  const [nextAudio, setNextAudio] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const startConversation = () => {
    setCurrentQuestionIndex(0);
    askQuestion(0);
  };

  const askQuestion = async (index) => {
    const question = QUESTIONS[index];
    try {
      const translationResponse = await axios.post('https://dhruva-api.bhashini.gov.in/services/inference/pipeline', {
        pipelineTasks: [
          {
            taskType: "translation",
            config: {
              language: {
                sourceLanguage: "en",
                targetLanguage: language
              },
              serviceId: "ai4bharat/indictrans-v2-all-gpu--t4"
            }
          }
        ],
        inputData: {
          input: [{ source: question }]
        }
      }, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json'
        }
      });

      const translatedText = translationResponse.data.pipelineResponse[0].output[0].target;

      const ttsResponse = await axios.post('https://dhruva-api.bhashini.gov.in/services/inference/pipeline', {
        pipelineTasks: [
          {
            taskType: "tts",
            config: {
              language: {
                sourceLanguage: language
              },
              serviceId: "ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4",
              gender: "female",
              samplingRate: 8000
            }
          }
        ],
        inputData: {
          input: [{ source: translatedText }]
        }
      }, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json'
        }
      });

      const audioContent = ttsResponse.data.pipelineResponse[0].audio[0].audioContent;
      if (audioContent) {
        const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
        audio.playbackRate = playbackRate;
        audioRef.current = audio;
        audio.play();

        // Preload the next question's audio
        if (index < QUESTIONS.length - 1) {
          preloadNextQuestion(index + 1);
        }
      } else {
        console.error('No audio content found in the response');
      }
    } catch (error) {
      console.error('Error in TTS:', error);
    }
  };

  const preloadNextQuestion = async (index) => {
    const question = QUESTIONS[index];
    try {
      const translationResponse = await axios.post('https://dhruva-api.bhashini.gov.in/services/inference/pipeline', {
        pipelineTasks: [
          {
            taskType: "translation",
            config: {
              language: {
                sourceLanguage: "en",
                targetLanguage: language
              },
              serviceId: "ai4bharat/indictrans-v2-all-gpu--t4"
            }
          }
        ],
        inputData: {
          input: [{ source: question }]
        }
      }, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json'
        }
      });

      const translatedText = translationResponse.data.pipelineResponse[0].output[0].target;

      const ttsResponse = await axios.post('https://dhruva-api.bhashini.gov.in/services/inference/pipeline', {
        pipelineTasks: [
          {
            taskType: "tts",
            config: {
              language: {
                sourceLanguage: language
              },
              serviceId: "ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4",
              gender: "female",
              samplingRate: 8000
            }
          }
        ],
        inputData: {
          input: [{ source: translatedText }]
        }
      }, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json'
        }
      });

      const audioContent = ttsResponse.data.pipelineResponse[0].audio[0].audioContent;
      if (audioContent) {
        const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
        audio.playbackRate = playbackRate;
        setNextAudio(audio);
      } else {
        console.error('No audio content found in the response');
      }
    } catch (error) {
      console.error('Error in preloading TTS:', error);
    }
  };

  const handleNext = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (isRecording) {
      stopRecording();
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      if (nextAudio) {
        audioRef.current = nextAudio;
        audioRef.current.play();
        // Preload the subsequent question's audio
        if (nextIndex < QUESTIONS.length - 1) {
          preloadNextQuestion(nextIndex + 1);
        }
      } else {
        askQuestion(nextIndex);
      }
    } else {
      console.log('Collected Data:', JSON.stringify(responses));
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setResponses((prevResponses) => [...prevResponses, transcript]);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const stopRecording = () => {
    if (isRecording) {
      setIsRecording(false);
    }
  };

  return (
    <div>
      <h1>Interactive Product Form</h1>
      <div>
        <label>Select Language:</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="">Select Language</option>
          {LANGUAGES.map(lang => (
            <option key={lang.sourceLanguage} value={lang.sourceLanguage}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={startConversation} disabled={!language}>
        Start
      </button>

      {currentQuestionIndex >= 0 && (
        <div>
          <p>{QUESTIONS[currentQuestionIndex]}</p>
          <button onClick={startRecording} disabled={isRecording}>Record</button>
          <button onClick={handleNext} disabled={isRecording}>Next</button>
        </div>
      )}
      <div>
        <label>Playback Rate:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={playbackRate}
          onChange={(e) => setPlaybackRate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
