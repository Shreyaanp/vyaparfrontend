import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Voice.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';





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

const QUESTIONS: string[] = [
  "What is the shop name?",
  "What is the seller state?",
  "What is the product language?",
  "What is the product category?",
  "What is the product name?",
  "What is the price of the product?",
  "What is the product description?",
  "What are the product variations?"
];

function Voice() {
    const [questionsHistory, setQuestionsHistory] = useState<string[]>([]);
    const [responsesHistory, setResponsesHistory] = useState<string[]>([]);  
  const [language, setLanguage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [responses, setResponses] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [nextAudio, setNextAudio] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const user = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    console.log(user.language);
    // Set a default language if needed when the component mounts
    setLanguage(getSourceLanguage(user.language)|| 'en'); // Example default language or fallback to 'en'
  }, [user.language]);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const getSourceLanguage = (languageName: string): string => {
    const foundLanguage = LANGUAGES.find(lang => lang.name === languageName);
    return foundLanguage ? foundLanguage.sourceLanguage : 'en'; // Default to 'en' if not found
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
    //   const audioRef = useRef<HTMLAudioElement | null>(null);
      const audioContent = ttsResponse.data.pipelineResponse[0].audio[0].audioContent;
      if (audioContent) {
        const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
        audio.playbackRate = playbackRate;
        audioRef.current = audio;
        audio.play();
  
        console.log('Audio generated successfully:', audio);
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
    // Pause any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
    }
  
    // Stop recording if it's ongoing
    if (isRecording) {
      stopRecording();
    }
  
    // Check if there's a next question to proceed to
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
  
      // Update the current question index
      setCurrentQuestionIndex(nextIndex);
  
      // Handle audio playback for the next question if available
      if (nextAudio) {
        audioRef.current = nextAudio;
        audioRef.current.play();
  
        // Preload the subsequent question's audio if available
        if (nextIndex < QUESTIONS.length - 1) {
          preloadNextQuestion(nextIndex + 1);
        }
      } else {
        // If no audio, directly proceed to asking the next question
        askQuestion(nextIndex);
      }
  
      // Add the current question and its response to history
      if (currentQuestionIndex >= 0 && responses[currentQuestionIndex]) {
        setQuestionsHistory([...questionsHistory, QUESTIONS[currentQuestionIndex]]);
        setResponsesHistory([...responsesHistory, responses[currentQuestionIndex]]);
      }
    } else {
      // If it's the end of questions, log collected data
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
    <div className="h-screen flex justify-center items-center">
    <div className="flex w-full h-3/4 max-w-4xl flex justify-center items-center">
        <div className="w-1/10 flex flex-col justify-between ml-4 h-1/2 mr-10">
            {/* Select Language */}
            <div className="flex items-center mb-4">
                <label className="mr-2">Select Language:</label>
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="border border-gray-300 rounded px-3 py-1 mr-2"
                >
                    <option value="">Select Language</option>
                    {LANGUAGES.map((lang) => (
                        <option key={lang.sourceLanguage} value={lang.sourceLanguage}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                <button
                    onClick={startConversation}
                    disabled={!language}
                    className="bg-primary text-white px-4 py-1 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Start
                </button>
            </div>

            {/* Input section */}
            <div className="chat-input mb-4">
                
                <div className="button-group">
                    {/* Record button */}
                    <button
                        onClick={startRecording}
                        disabled={isRecording}
                        className="bg-primary text-white px-4 py-2 rounded mr-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Record
                    </button>
                    {/* Next button */}
                    <button
                        onClick={handleNext}
                        disabled={isRecording}
                        className="bg-secondary text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Playback rate */}
            <div className="chat-settings">
                <label className="mr-2">Playback Rate:</label>
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(e.target.value)}
                    className="w-full bg-gray-200 rounded-lg p-2"
                />
            </div>
        </div>

        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-4 w-1/2 h-full">
            <div className="w-1/8 rounded flex flex-col overflow-y-auto h-full">
                {/* Always display the welcome message */}
                <div className="chat-message">
                    <div className="chat-question p-2 m-4">
                        <p>Hello, I'm Vyapar Sathi! 👋<br />Welcome to Vyapar Launchpad, Let's onboard your product.</p>
                    </div>
                </div>

                {/* Render questions and responses history */}
                {questionsHistory.map((question, index) => (
                    <div key={`history-question-${index}`} className="chat-message p-2">
                        <div className="chat-question p-2">
                            <p>{question}</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="chat-response p-2 inline-block">
                                <p>{responsesHistory[index]}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Render current question and response */}
                {currentQuestionIndex >= 0 && (
                    <div className="chat-message p-2">
                        <div className="chat-question p-2">
                            <p>{QUESTIONS[currentQuestionIndex]}</p>
                        </div>
                        {responses[currentQuestionIndex] && (
                            <div className="flex justify-end">
                                <div className="chat-response p-2 inline-block">
                                    <p>{responses[currentQuestionIndex]}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
</div>

  );
  
}

export default Voice;
