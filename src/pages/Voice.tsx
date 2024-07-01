import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Voice.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MicInput from "../images/icons/MicInput.svg";
import VoiceLeftImg from "../images/icons/VoiceLeftImg.svg";
import VoiceRightImg from "../images/icons/VoiceRightImg.svg";
import MicAnimation from "../images/icons/MicAnimation.json";
import Lottie from 'react-lottie';
import RobotIcon from '../images/icons/RobotIcon.svg';

import CompanyUpload from "../components/Onboarding/OnBoardPages/Companyupload";
import ProductImages from "../components/Onboarding/OnBoardPages/ProductImages";

type ProductVariationsProps = {
    productData: any;
    setProductData: (data: any) => void;
}

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
  "What are the product variations?",
  "Upload the image of the product"
];

const Voice: React.FC = () => {
  const [productData, setProductData] = useState<any>({});
  const [questionsHistory, setQuestionsHistory] = useState<string[]>([]);
  const [responsesHistory, setResponsesHistory] = useState<string[]>([]);
  const [language, setLanguage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [responses, setResponses] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ [key: number]: File | null }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [nextAudio, setNextAudio] = useState<HTMLAudioElement | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const user = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    setLanguage(getSourceLanguage(user.language) || 'en');
  }, [user.language]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const getSourceLanguage = (languageName: string): string => {
    const foundLanguage = LANGUAGES.find(lang => lang.name === languageName);
    return foundLanguage ? foundLanguage.sourceLanguage : 'en';
  };

  const startConversation = () => {
    setCurrentQuestionIndex(0);
    askQuestion(0);
  };

  const askQuestion = async (index: number) => {
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

  const preloadNextQuestion = async (index: number) => {
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

        if (nextIndex < QUESTIONS.length - 1) {
          preloadNextQuestion(nextIndex + 1);
        }
      } else {
        askQuestion(nextIndex);
      }

      if (currentQuestionIndex >= 0 && responses[currentQuestionIndex]) {
        setQuestionsHistory([...questionsHistory, QUESTIONS[currentQuestionIndex]]);
        setResponsesHistory([...responsesHistory, responses[currentQuestionIndex]]);
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [index]: file
    }));
    if (file) {
      setResponses((prevResponses) => {
        const newResponses = [...prevResponses];
        newResponses[index] = file.name;
        return newResponses;
      });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
  <div className="absolute left-0 top-0 h-full">
    <img src={VoiceLeftImg} alt="Voice Left" className="h-full w-auto" />
  </div>

  <div className="absolute right-0 top-0 h-full">
    <img src={VoiceRightImg} alt="Voice Right" className="h-full w-auto" />
  </div>

  <div className="flex justify-center items-center text-2xl font-extrabold mb-12 text-4b4b4b mt-10">
    <span className="font-bold text-4xl font-poppins text-black text-center">
      Vya<span style={{ color: '#FCBD01' }}>par</span> Launch
      <span style={{ color: '#FCBD01' }}>pad</span>
    </span>
  </div>

  <div className="flex flex-col w-full h-screen items-center overflow-hidden">
    <div className="w-full max-w-4xl p-4 h-2/3 mb-5 overflow-hidden rounded-lg  bg-white">
      <div className="w-full h-full overflow-y-auto">
        <div className="w-full flex flex-col pr-3">
          <div className="chat-message text-black flex items-center">
            <div>
              <img src={RobotIcon} alt="robot" className="inline-block" />
            </div>
            <div className="chat-question p-2 m-4">
              <p>Hello, I'm Vyapar Sathi! 👋<br />Welcome to Vyapar Launchpad, Let's onboard your product.</p>
            </div>
          </div>

          {questionsHistory.map((question, index) => (
            <div key={`history-question-${index}`} className="chat-message">
              <div className="flex items-start">
                <img src={RobotIcon} alt="robot" className="inline-block mr-3" />
                <div className="chat-question p-2 text-black">
                  <p>{question}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="chat-response p-2 inline-block bg-[#FCBD01] text-white">
                  <p>{responsesHistory[index]}</p>
                </div>
              </div>
            </div>
          ))}

          {currentQuestionIndex >= 0 && (
            <div className="chat-message p-2">
              <img src={RobotIcon} alt="robot" className="inline-block mr-3" />
              <div className="chat-question p-2 text-black">
                <p>{QUESTIONS[currentQuestionIndex]}</p>
              </div>
              {currentQuestionIndex === 8 ? (
                <ProductImages productData={productData} setProductData={setProductData} />
              ) : (
                responses[currentQuestionIndex] && (
                  <div className="flex justify-end">
                    <div className="chat-response p-2 inline-block bg-[#FCBD01] text-white">
                      <p>{responses[currentQuestionIndex]}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="button-group flex space-x-2 mb-5 items-center justify-center">
      <button
        onClick={startRecording}
        disabled={isRecording}
        className="flex items-center justify-center bg-transparent disabled:cursor-not-allowed"
        style={{ width: '80px', height: '80px' }}
      >
        {isRecording ? (
          <Lottie
            options={{
              animationData: MicAnimation,
              loop: true,
              autoplay: true
            }}
            height={80}
            width={80}
          />
        ) : (
          <img src={MicInput} alt="Record" className="w-full h-full" />
        )}
      </button>
      <button
        onClick={handleNext}
        disabled={isRecording}
        className="flex items-center justify-center bg-yellow-500 text-black rounded-3xl disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-yellow-600 hover:text-white"
        style={{ width: '80px', height: '40px' }}
      >
        Next
      </button>

      <button
        onClick={startConversation}
        disabled={!language}
        className="flex items-center justify-center bg-yellow-500 text-black rounded-3xl disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-yellow-600 hover:text-white"
        style={{ width: '80px', height: '40px' }}
      >
        Start
      </button>
    </div>
  </div>
</div>


  
  

  );
}

export default Voice;
