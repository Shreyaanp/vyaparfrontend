import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Voice.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";

const API_KEY =
  "sk0Y4-IrxVJSOmP2V7umwEeUnxyWqCbvHSK4LzLRaAQ7yz4-_p6Mez3WTjD8-Bl0";
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
  { sourceLanguage: "ur", name: "Urdu" },
];

const QUESTIONS: string[] = [
  "Hello, I'm Vyapar Sathi! 👋 Welcome to Vyapar Launchpad. Let's onboard your product.",
  "What is the shop name?",
  "What is the seller state?",
  "What is the product language?",
  "What is the product category?",
  "What is the product name?",
  "What is the price of the product?",
  "What is the product description?",
  "What are the product variations?",
];

const aiUrl = import.meta.env.VITE_BASE_AI_API;

const postData = async (productTitle: string) => {
  try {
    const response = await axios.post(
      `${aiUrl}process/`,
      {
        prompt: productTitle,
        description: "Description",
        variation: "Variation",
        pricing: 2500,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.39.0",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};

function Voice() {
  const [questionsHistory, setQuestionsHistory] = useState<string[]>([]);
  const [responsesHistory, setResponsesHistory] = useState<string[]>([]);
  const [language, setLanguage] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [responses, setResponses] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [nextAudio, setNextAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const startConversation = () => {
    setCurrentQuestionIndex(0);
    askQuestion(0);
  };

  const askQuestion = async (index: number) => {
    const question = QUESTIONS[index];
    try {
      const translationResponse = await axios.post(
        "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
        {
          pipelineTasks: [
            {
              taskType: "translation",
              config: {
                language: {
                  sourceLanguage: "en",
                  targetLanguage: language,
                },
                serviceId: "ai4bharat/indictrans-v2-all-gpu--t4",
              },
            },
          ],
          inputData: {
            input: [{ source: question }],
          },
        },
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const translatedText =
        translationResponse.data.pipelineResponse[0].output[0].target;

      const ttsResponse = await axios.post(
        "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
        {
          pipelineTasks: [
            {
              taskType: "tts",
              config: {
                language: {
                  sourceLanguage: language,
                },
                serviceId: "ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4",
                gender: "female",
                samplingRate: 8000,
              },
            },
          ],
          inputData: {
            input: [{ source: translatedText }],
          },
        },
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const audioContent =
        ttsResponse.data.pipelineResponse[0].audio[0].audioContent;
      if (audioContent) {
        const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
        audioRef.current = audio;
        audio.play();

        // Preload the next question's audio
        if (index < QUESTIONS.length - 1) {
          preloadNextQuestion(index + 1);
        }
      } else {
        console.error("No audio content found in the response");
      }
    } catch (error) {
      console.error("Error in TTS:", error);
    }
  };

  const preloadNextQuestion = async (index: number) => {
    const question = QUESTIONS[index];
    try {
      const translationResponse = await axios.post(
        "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
        {
          pipelineTasks: [
            {
              taskType: "translation",
              config: {
                language: {
                  sourceLanguage: "en",
                  targetLanguage: language,
                },
                serviceId: "ai4bharat/indictrans-v2-all-gpu--t4",
              },
            },
          ],
          inputData: {
            input: [{ source: question }],
          },
        },
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const translatedText =
        translationResponse.data.pipelineResponse[0].output[0].target;

      const ttsResponse = await axios.post(
        "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
        {
          pipelineTasks: [
            {
              taskType: "tts",
              config: {
                language: {
                  sourceLanguage: language,
                },
                serviceId: "ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4",
                gender: "female",
                samplingRate: 8000,
              },
            },
          ],
          inputData: {
            input: [{ source: translatedText }],
          },
        },
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const audioContent =
        ttsResponse.data.pipelineResponse[0].audio[0].audioContent;
      if (audioContent) {
        const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
        setNextAudio(audio);
      } else {
        console.error("No audio content found in the response");
      }
    } catch (error) {
      console.error("Error in preloading TTS:", error);
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

    // Add the current question and its response to history
    if (currentQuestionIndex >= 0 && responses[currentQuestionIndex]) {
      setQuestionsHistory((prev) => [...prev, QUESTIONS[currentQuestionIndex]]);
      setResponsesHistory((prev) => [...prev, responses[currentQuestionIndex]]);
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
    } else {
      // If it's the end of questions, log collected data
      console.log("Collected Data:", JSON.stringify(responses));
      const productTitle = responses[5]; // Assuming the product title is at index 5
      setLoading(true);
      try {
        const response = await postData(productTitle);
        console.log("Post response:", response);
        navigate("/ProductPage", {
          state: {
            productData: {
              productTitle,
              productDescription: "Description",
              productVariation: "Variation",
              pricing: 2500,
              response: response,
            },
          },
        });
      } catch (error) {
        console.error("Error posting data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setResponses((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses[currentQuestionIndex] = transcript;
        return updatedResponses;
      });
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const stopRecording = () => {
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FDE7A8] ">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-5xl bg-white shadow-lg rounded-lg p-4 w-full h-3/4 flex">
          <div className="w-3/4 flex flex-col">
            <div className="chat-box flex-1 overflow-y-auto bg-gray-100 p-4 rounded-lg">
              {currentQuestionIndex < 0 ? (
                <div className="chat-message">
                  <div className="chat-question">
                    <p>Please select a language to start the conversation.</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Render questions and responses history */}
                  {questionsHistory.map((question, index) => (
                    <div
                      key={`history-question-${index}`}
                      className="chat-message"
                    >
                      <div className="chat-question">
                        <p>{question}</p>
                      </div>
                      <div className="chat-response ml-4">
                        <p>{responsesHistory[index]}</p>
                      </div>
                    </div>
                  ))}

                  {/* Render current question and response */}
                  {currentQuestionIndex < QUESTIONS.length && (
                    <div className="chat-message">
                      <div className="chat-question">
                        <p>{QUESTIONS[currentQuestionIndex]}</p>
                      </div>
                      {responses[currentQuestionIndex] && (
                        <div className="chat-response ml-4">
                          <p>{responses[currentQuestionIndex]}</p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {currentQuestionIndex >= 0 && (
              <div className="chat-input mt-4">
                <div className="flex">
                  <button
                    onClick={startRecording}
                    className="bg-primary text-white px-4 py-2 rounded mr-2"
                  >
                    Record
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-secondary text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-1/3 ml-4 flex flex-col justify-between">
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
                className={`bg-primary text-white px-4 py-1 rounded ${
                  !language
                    ? "disabled:bg-gray-400 disabled:cursor-not-allowed"
                    : "hover:bg-blue-700 hover:cursor-pointer"
                }`}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Voice;
