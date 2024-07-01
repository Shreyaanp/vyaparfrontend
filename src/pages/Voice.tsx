import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import './Voice.css';
import MicInput from "../images/icons/MicInput.svg";
import VoiceLeftImg from "../images/icons/VoiceLeftImg.svg";
import VoiceRightImg from "../images/icons/VoiceRightImg.svg";
import MicAnimation from "../images/icons/MicAnimation.json";
import Lottie from 'react-lottie';
import RobotIcon from '../images/icons/RobotIcon.svg';
import Companyupload from '../components/Onboarding/OnBoardPages/Companyupload';
import ProductImages from "../components/Onboarding/OnBoardPages/ProductImages";
import { setSellerDetails } from '../redux/slice';
import { setProductDetails } from '../redux/slice';



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
  "Upload the logo of the company",
  "Upload the image of the product"
];

const Voice: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const [questionsHistory, setQuestionsHistory] = useState<string[]>([]);
  const [responsesHistory, setResponsesHistory] = useState<string[]>([]);
  const [shopName, setShopName] = useState('');
  const [sellerState, setSellerState] = useState('');
  const [productLanguage, setProductLanguage] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [responses, setResponses] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ [key: number]: File | null }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [nextAudio, setNextAudio] = useState<HTMLAudioElement | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [productData, setProductData] = useState<any>({
    inputLanguage: 'english',
    shopName: '',
    sellerState: '',
    productlanguage: '',
    productCategory: '',
    ProductTitle: '',
    Pricing: '',
    productDescription: '',
    productVariation: '',
    companyLogo: '',
    images: [],
  });
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
  const aiUrl = import.meta.env.VITE_BASE_AI_API;
const backendUrl = import.meta.env.VITE_BASE_API;
const photAiUrl = "https://prodapi.phot.ai/external/api/v2/user_activity/background-generator";
const photAiApiKey = "667bd78dc03bdd1cb404e7a0_3668c766b56f00a1de05_apyhitools";


  const handleNext = async () => {
    console.log(responses);
    // Pause audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }
  
    // Stop recording if in progress
    if (isRecording) {
      stopRecording();
    }
  
    // Check if there are more questions to ask
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
  
      // Play next audio or ask next question
      if (nextAudio) {
        audioRef.current = nextAudio;
        audioRef.current.play();
  
        // Preload next question audio if available
        if (nextIndex < QUESTIONS.length - 1) {
          preloadNextQuestion(nextIndex + 1);
        }
      } else {
        await askQuestion(nextIndex); // Wait for askQuestion to complete
      }
  
      // Update history with current question and response
      if (currentQuestionIndex >= 0 && responses[currentQuestionIndex]) {
        setQuestionsHistory([...questionsHistory, QUESTIONS[currentQuestionIndex]]);
        setResponsesHistory([...responsesHistory, responses[currentQuestionIndex]]);
      }
  
    } else {
        console.log("reached the end");
        console.log(responses);
        // Dispatch actions to update sellerDetails and productDetails
        dispatch(
          setSellerDetails({
            name: responses[0] || 'Error Dispatching',
            state: responses[1] || 'Error Dispatching',
            language: responses[2] || 'Error Dispatching',
            category: responses[3] || 'Error Dispatching',
          })
        );
    
        dispatch(
          setProductDetails({
            title: responses[4] || 'Error Dispatching',
            pricing: parseFloat(responses[5]) || 0,
            description: responses[6] || 'Error Dispatching',
            variations: responses[7] || 'Error Dispatching',
            images: [],
          })
        );
        const postData = async (
            productTitle,
            productDescription,
            productVariation,
            pricing,
          ) => {
            console.log('Executing postData function...');
            
            const url = productData.sellerState !== ''
              ? `${aiUrl}process/`
              : 'http://127.0.0.1:8000/process/';
          
            console.log('PostData URL:', url);
            
            const requestData = {
              prompt: productTitle,
              description: productDescription,
              variation: productVariation,
              pricing: pricing,
            };
          
            console.log('Request Data:', requestData);
          
            try {
              const response = await axios.post(
                url,
                requestData,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'PostmanRuntime/7.39.0',
                    Accept: '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    Connection: 'keep-alive',
                  },
                },
              );
          
              console.log('PostData Response:', response.data);
              return response.data;
            } catch (error) {
              console.error('PostData Error:', error);
              throw error; // Re-throw the error to handle it elsewhere if needed
            }
          };
          
        
          const changeBackgroundImages = async (imageUrls, prompt) => {
            const newImages = await Promise.all(
              imageUrls.map(async (url) => {
                try {
                  const response = await axios.post(
                    photAiUrl,
                    {
                      file_name: url.split('/').pop(),
                      input_image_link: url,
                      prompt: prompt,
                    },
                    {
                      headers: {
                        'x-api-key': photAiApiKey,
                        'Content-Type': 'application/json',
                      },
                    }
                  );
                  console.log("Phot.AI response:", response.data); // Log the response
                  const orderId = response.data.order_id;
        
                  // Fetch order status using orderId
                  let orderStatusResponse;
                  let retries = 5;
        
                  // Retry mechanism to fetch the order status
                  while (retries > 0) {
                    orderStatusResponse = await fetchOrderStatus(orderId);
                    if (orderStatusResponse && orderStatusResponse.output_urls.length > 0) {
                      break;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
                    retries--;
                  }
        
                  if (orderStatusResponse && orderStatusResponse.output_urls.length > 0) {
                    return orderStatusResponse.output_urls[0];
                  } else {
                    return null;
                  }
                } catch (error) {
                  console.error("Error changing background:", error);
                  return null;
                }
              })
            );
            return newImages;
          };
      const prompt = `Please change the background of the input Image such that they are Ecommerce ready. The product is called ${productData.ProductTitle}`;
      postData(
        productData.ProductTitle,
        productData.productDescription,
        productData.productVariation,
        productData.Pricing,
      ).then(async (response) => {
        const newImages = await changeBackgroundImages(productData.images, prompt);
        console.log("New images:", newImages); // Log the new images
        navigate('/ProductPage', {
          state: {
            productData: {
              inputLanguage: productData.inputLanguage,
              shopName: productData.shopName,
              sellerState: productData.sellerState,
              productlanguage: productData.productlanguage,
              productCategory: productData.productCategory,
              productTitle: productData.ProductTitle,
              pricing: productData.Pricing,
              productDescription: productData.productDescription,
              productVariation: productData.productVariation,
              response: { ...response, newImages: newImages },
              companyLogo: productData.companyLogo,
              images: productData.images,
            },
          },
        });
      });
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
        <div className="w-full max-w-4xl p-4 h-2/3 mb-5 overflow-hidden rounded-lg bg-white">
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
                    <Companyupload productData={productData} setProductData={setProductData} />
                  ) : 
                  currentQuestionIndex === 9 ? (
                    <ProductImages productData={productData} setProductData={setProductData} />
                  ) : 
                  (
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
