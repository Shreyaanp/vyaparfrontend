import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../redux/slice';
import { RootState } from '../../../redux/store';
import SearchIcon from '../../../images/icons/searchIcon.svg';

type SearchLangProps = {
  productData: any;
  setProductData: any;
};

const SearchLang: React.FC<SearchLangProps> = ({
  productData,
  setProductData,
}) => {
  const dispatch = useDispatch();
  const [proData, setProData] = useState<any>(productData);

  const indianLanguages: string[] = [
    'Hindi',
    'English',
    'Bengali',
    'Telugu',
    'Marathi',
    'Tamil',
    'Gujarati',
    'Kannada',
    'Odia',
    'Punjabi',
  ];

  // Function to generate three random language names
  const generateRandomLanguages = (): string[] => {
    const randomLanguages: string[] = [];
    while (randomLanguages.length < 3) {
      const randomIndex: number = Math.floor(
        Math.random() * indianLanguages.length,
      );
      const randomLanguage: string = indianLanguages[randomIndex];
      if (!randomLanguages.includes(randomLanguage)) {
        randomLanguages.push(randomLanguage);
      }
    }
    return randomLanguages;
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [randomLanguages, setRandomLanguages] = useState<string[]>(
    generateRandomLanguages(),
  );
  const [clickedText, setClickedText] = useState<string>('');

  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    // Filter languages based on search term
    const results: string[] = indianLanguages.filter((language: string) =>
      language.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setSearchResult(results.length > 0 ? results[0] : '');
  };

  // Function to handle click on search result or random language
  const handleClick = (language: string): void => {
    setClickedText(language);
    setSearchResult(language);
    dispatch(setLanguage(language));
    setProductData({ ...productData, inputLanguage: language.toLowerCase() });
  };

  return (
    <div className=" px-8 h-[20rem]">
      <div>
        <h1
          style={{
            color: '#170F49',
            fontFamily: 'poppins',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          Language Selection
        </h1>
        <p className="text-[#6F6C90] font-poppins text-sm">
          Select language you will use to input product details.
        </p>
      </div>

      <div className=" px-4">
        <div className="mt-4 font-poppins relative">
          <div
            className="flex items-center"
            style={{
              backgroundColor: '#FDCF46',
              padding: 10,
              borderRadius: 14,
            }}
          >
            {/* <img src={Search} /> */}
            <div style={{ marginRight: 7 }}>
              <img src={SearchIcon} style={{ width: 18, height: 18 }} />
            </div>
            <input
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={handleChange}
              style={{ backgroundColor: '#FDCF46', color: '#19213D', flex: 1 }}
              className="placeholder-[#19213D] outline-none"
            />
          </div>
        </div>
        {/* Display search result */}
        {searchResult && (
          <div
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
              borderRadius: 14,
              fontFamily: 'poppins',
              fontSize: 14,
              border: `2px solid ${
                searchResult === clickedText ? '#FCBD01' : '#E5E5E5'
              }`,

              fontWeight: '600',
              paddingLeft: 10,
            }}
          >
            <div
              className="cursor-pointer rounded-md p-2"
              onClick={() => handleClick(searchResult)}
            >
              {searchResult}
            </div>
          </div>
        )}
        {/* Display three random language names */}
        <div
          style={{
            marginTop: 10,
            borderColor: '#E5E5E5',
            borderWidth: 2,
            borderRadius: 14,
          }}
        >
          {randomLanguages.map((language: string, index: number) => (
            <div
              key={index}
              className={`
            cursor-pointer 
            ${language === clickedText ? 'text-[#FCBD01]' : 'text-[#170F49]'}`}
              style={{
                borderColor: '#E5E5E5',
                borderBottomWidth: index !== randomLanguages.length - 1 ? 2 : 0,
                cursor: 'pointer',
                fontWeight: '600',
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                fontFamily: 'poppins',
                fontSize: 14,
              }}
              onClick={() => handleClick(language)}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchLang;

// const data = {
//   hindi: {
//     sellerDetails: {
//       heading: 'विक्रेता का विवरण',
//       subheading: 'अपने व्यापार का विस्तार दीजिए',
//       shopName: 'दुकान का नाम',
//       sellerState: 'विक्रेता का राज्य',
//       productLanguage: 'उत्पाद की भाषा',
//       productCategory: 'उत्पाद श्रेणी',
//     },
//     productDetails: {
//       heading: 'उत्पाद का विवरण',
//       subheading: 'अपने उत्पाद का विवरण दीजिए',
//       productTitle: 'उत्पाद का नाम',
//       productTitleLabel: "यहां अपना उत्पाद शीर्षक दर्ज करें",
//       pricing: 'मूल्य',
//       pricingLabel: "अपने उत्पाद की मूल्य दर्ज करें",

//     },
//     productDesc: {
//       heading: 'उत्पाद की जानकारी',
//       subheading: 'अपने उत्पाद की जानकारी दीजिए',
//       productDescription: 'उत्पाद का विवरण',
//       productDescriptionLabel: "अपने उत्पाद का विवरण दर्ज करें",
//     },
//     productVari: {
//       heading: 'उत्पाद की विविधता',
//       subheading: 'अपने उत्पाद की विविधता दीजिए',
//       productVariation: 'उत्पाद की विविधता',
//       productVariationLabel: "अपने उत्पाद की विविधता दर्ज करें",
//     },
//     compLogo: {
//       heading: 'कंपनी का लोगो',
//       subheading: 'अपने कंपनी का लोगो अपलोड करें',
//     },
//     productImg: {
//       heading: 'उत्पाद छवियाँ',
//       subheading: 'अपने उत्पाद की छवियाँ अपलोड करें',
//     }
//   },
//   kannada: {
//     sellerDetails: {
//       heading: 'ಮಾರಾಟಗಾರರ ವಿವರ',
//       subheading: 'ನಿಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ವಿಸ್ತರಿಸಿ',
//       shopName: 'ಅಂಗಡಿಯ ಹೆಸರು',
//       sellerState: 'ಮಾರಾಟಗಾರರ ರಾಜ್ಯ',
//       productLanguage: 'ಉತ್ಪನ್ನದ ಭಾಷೆ',
//       productCategory: 'ಉತ್ಪನ್ನ ವರ್ಗ',
//     },
//     productDetails: {
//       heading: 'ಉತ್ಪನ್ನದ ವಿವರ',
//       subheading: 'ನಿಮ್ಮ ಉತ್ಪನ್ನದ ವಿವರ ನೀಡಿ',
//       productTitle: 'ಉತ್ಪನ್ನದ ಹೆಸರು',
//       productTitleLabel: "ಇಲ್ಲಿ ನಿಮ್ಮ ಉತ್ಪನ್ನ ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ",
//       pricing: 'ಬೆಲೆ',
//       pricingLabel: "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಬೆಲೆ ನಮೂದಿಸಿ",

//     },
//     productDesc: {
//       heading: 'ಉತ್ಪನ್ನದ ಮಾಹಿತಿ',
//       subheading: 'ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಮಾಹಿತಿ ನೀಡಿ',
//       productDescription: 'ಉತ್ಪನ್ನದ ವಿವರಣೆ',
//       productDescriptionLabel: "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ವಿವರಣೆ ನಮೂದಿಸಿ",
//     },
//     productVari: {
//       heading: 'ಉತ್ಪನ್ನದ ವೈವಿಧ್ಯತೆ',
//       subheading: 'ನಿಮ್ಮ ಉತ್ಪನ್ನದ ವೈವಿಧ್ಯತೆ ನೀಡಿ',
//       productVariation: 'ಉತ್ಪನ್ನದ ವೈವಿಧ್ಯತೆ',
//       productVariationLabel: "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ವೈವಿಧ್ಯತೆ ನಮೂದಿಸಿ",
//     },
//     compLogo: {
//       heading: 'ಕಂಪನಿಯ ಲೋಗೋ',
//       subheading: 'ನಿಮ್ಮ ಕಂಪನಿಯ ಲೋಗೋವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ',
//     },
//     productImg: {
//       heading: 'ಉತ್ಪನ್ನದ ಚಿತ್ರಗಳು',
//       subheading: 'ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ',
//     }
//   },

//   tamil: {
//     sellerDetails: {
//       heading: 'விற்பனையாளர் விவரங்கள்',
//       subheading: 'உங்கள் வணிகத்தின் விளக்கத்தை சேர்க்கவும்',
//       shopName: 'கடையின் பெயர்',
//       sellerState: 'விற்பனையாளர் மாநிலம்',
//       productLanguage: 'பொருளின் மொழி',
//       productCategory: 'பொருள் வகை',
//     },
//     productDetails: {
//       heading: 'பொருள் விவரங்கள்',
//       subheading: 'உங்கள் பொருளின் விவரங்களை உள்ளிடுக',
//       productTitle: 'பொருளின் பெயர்',
//       productTitleLabel: "உங்கள் பொருளின் தலைப்பை இங்கே உள்ளிடவும்",
//       pricing: 'விலை',
//       pricingLabel: "உங்கள் பொருளின் விலையை உள்ளிடவும்",

//     },
//     productDesc: {
//       heading: 'பொருள் விவரம்',
//       subheading: 'உங்கள் பொருளின் விவரத்தை உள்ளிடுக',
//       productDescription: 'பொருளின் விவரணம்',
//       productDescriptionLabel: "உங்கள் பொருளின் விவரணத்தை இங்கே உள்ளிடவும்",
//     },
//     productVari: {
//       heading: 'பொருள் வகைகள்',
//       subheading: 'உங்கள் பொருளின் வகைகளை உள்ளிடுக',
//       productVariation: 'பொருள் வகைகள்',
//       productVariationLabel: "உங்கள் பொருளின் வகைகளை இங்கே உள்ளிடவும்",
//     },
//     compLogo: {
//       heading: 'நிறுவனத்தின் லோகோ',
//       subheading: 'உங்கள் நிறுவனத்தின் லோகோ பதிவேற்றம் செய்க',
//     },
//     productImg: {
//       heading: 'பொருள் படங்கள்',
//       subheading: 'உங்கள் பொருளின் படங்களை பதிவேற்றம் செய்க',
//     }
//   },

//   punjabi: {
//     sellerDetails: {
//       heading: 'ਵਿਕਰੇਤਾ ਦੀ ਵੇਰਵਾ',
//       subheading: 'ਆਪਣੇ ਵਪਾਰ ਦੀ ਖਿੱਚੋਣ ਕਰੋ',
//       shopName: 'ਦੋਕਾਨ ਦਾ ਨਾਮ',
//       sellerState: 'ਵਿਕਰੇਤਾ ਦਾ ਰਾਜ',
//       productLanguage: 'ਉਤਪਾਦ ਦੀ ਭਾਸ਼ਾ',
//       productCategory: 'ਉਤਪਾਦ ਸ਼੍ਰੇਣੀ',
//     },
//     productDetails: {
//       heading: 'ਉਤਪਾਦ ਦੀ ਵੇਰਵਾ',
//       subheading: 'ਆਪਣੇ ਉਤਪਾਦ ਦੀ ਵੇਰਵਾ ਦਿਓ',
//       productTitle: 'ਉਤਪਾਦ ਦਾ ਨਾਮ',
//       productTitleLabel: "ਇੱਥੇ ਆਪਣਾ ਉਤਪਾਦ ਸਿਰਲੇਖ ਦਰਜ ਕਰੋ",
//       pricing: 'ਮੁੱਲ',
//       pricingLabel: "ਆਪਣੇ ਉਤਪਾਦ ਦਾ ਮੁੱਲ ਦਰਜ ਕਰੋ",

//     },
//     productDesc: {
//       heading: 'ਉਤਪਾਦ ਦੀ ਜਾਣਕਾਰੀ',
//       subheading: 'ਆਪਣੇ ਉਤਪਾਦ ਦੀ ਜਾਣਕਾਰੀ ਦਿਓ',
//       productDescription: 'ਉਤਪਾਦ ਦਾ ਵਰਣਨ',
//       productDescriptionLabel: "ਆਪਣੇ ਉਤਪਾਦ ਦਾ ਵਿਵਰਣ ਦਰਜ ਕਰੋ",
//     },
//     productVari: {
//       heading: 'ਉਤਪਾਦ ਦੀ ਵੈਰਾਇਟੀ',
//       subheading: 'ਆਪਣੇ ਉਤਪਾਦ ਦੀ ਵੈਰਾਇਟੀ ਦਿਓ',
//       productVariation: 'ਉਤਪਾਦ ਦੀ ਵੈਰਾਇਟੀ',
//       productVariationLabel: "ਆਪਣੇ ਉਤਪਾਦ ਦੀ ਵੈਰਾਇਟੀ ਦਰਜ ਕਰੋ",
//     },
//     compLogo: {
//       heading: 'ਕੰਪਨੀ ਦਾ ਲੋਗੋ',
//       subheading: 'ਆਪਣੀ ਕੰਪਨੀ ਦਾ ਲੋਗੋ ਅੱਪਲੋਡ ਕਰੋ',
//     },
//     productImg: {
//       heading: 'ਉਤਪਾਦ ਤਸਵੀਰਾਂ',
//       subheading: 'ਆਪਣੇ ਉਤਪਾਦ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅੱਪਲੋਡ ਕਰੋ',
//     }
//   },

//   marathi: {
//     sellerDetails: {
//       heading: 'विक्रेत्याचे तपशील',
//       subheading: 'आपले व्यवसाय सुधारा',
//       shopName: 'दुकानचे नाव',
//       sellerState: 'विक्रेत्याचा राज्य',
//       productLanguage: 'उत्पादाची भाषा',
//       productCategory: 'उत्पाद वर्ग',
//     },
//     productDetails: {
//       heading: 'उत्पादाचे तपशील',
//       subheading: 'आपल्या उत्पादाची माहिती द्या',
//       productTitle: 'उत्पाद नाव',
//       productTitleLabel: "इथे आपल्या उत्पाद शीर्षक द्या",
//       pricing: 'किंमत',
//       pricingLabel: "आपल्या उत्पादाची किंमत द्या",

//     },
//     productDesc: {
//       heading: 'उत्पादाची माहिती',
//       subheading: 'आपल्या उत्पादाची माहिती द्या',
//       productDescription: 'उत्पादाची माहिती',
//       productDescriptionLabel: "आपल्या उत्पादाची माहिती द्या",
//     },
//     productVari: {
//       heading: 'उत्पादाचे प्रकार',
//       subheading: 'आपल्या उत्पादाचे प्रकार द्या',
//       productVariation: 'उत्पादाचे प्रकार',
//       productVariationLabel: "आपल्या उत्पादाचे प्रकार द्या",
//     },
//     compLogo: {
//       heading: 'कंपनीचे लोगो',
//       subheading: 'आपल्या कंपनीचे लोगो अपलोड करा',
//     },
//     productImg: {
//       heading: 'उत्पाद चित्रे',
//       subheading: 'आपल्या उत्पादाची चित्रे अपलोड करा',
//     }
//   },

//   odia: {
//     sellerDetails: {
//       heading: 'ବିକ୍ରେତାଙ୍କ ବିବରଣୀ',
//       subheading: 'ଆପଣଙ୍କ ବ୍ୟବସାୟ ସହିତଙ୍କର ବିବରଣୀ',
//       shopName: 'ଦୋକାନ ନାମ',
//       sellerState: 'ବିକ୍ରେତାଙ୍କ ରାଜ୍ୟ',
//       productLanguage: 'ପ୍ରୋଡକ୍ଟ୍‌ ଭାଷା',
//       productCategory: 'ପ୍ରୋଡକ୍ଟ୍‌ ବର୍ଗ',
//     },
//     productDetails: {
//       heading: 'ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ',
//       subheading: 'ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ ଦିଅନ୍ତୁ',
//       productTitle: 'ପ୍ରୋଡକ୍ଟ୍‌ ଶୀର୍ଷକ',
//       productTitleLabel: "ଇଥିରେ ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ଟାଇଟଲ୍‌ ଦିଅନ୍ତୁ",
//       pricing: 'ମୁଲ୍ୟ',
//       pricingLabel: "ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ମୁଲ୍ୟ ଦିଅନ୍ତୁ",

//     },
//     productDesc: {
//       heading: 'ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ',
//       subheading: 'ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ ଦିଅନ୍ତୁ',
//       productDescription: 'ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ',
//       productDescriptionLabel: "ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ବିବରଣୀ ଦିଅନ୍ତୁ",
//     },
//     productVari: {
//       heading: 'ପ୍ରୋଡକ୍ଟ୍‌ ପ୍ରକାର',
//       subheading: 'ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ପ୍ରକାର ଦିଅନ୍ତୁ',
//       productVariation: 'ପ୍ରୋଡକ୍ଟ୍‌ ପ୍ରକାର',
//       productVariationLabel: "ଆପଣଙ୍କ ପ୍ରୋଡକ୍ଟ୍‌ ପ୍ରକାର ଦିଅନ୍ତୁ",
//     },
//     compLogo: {
//       heading: 'କମ୍ପନୀ ଲୋଗୋ',
//       subheading: 'ଆପଣଙ୍କ କମ୍ପନୀ ଲୋଗୋ ଅପଲୋଡ୍‌ କରନ୍ତୁ',
//     },
//     productImg: {
//       heading: 'ପ୍ରୋଡକ୍ଟ୍‌ ଇମେଜ୍‌',
//       subheading: 'ଆପଣ'
//     }
//   },

//   telugu: {
//     sellerDetails: {
//       heading: 'విక్రేత వివరాలు',
//       subheading: 'మీ వ్యాపారంలో విస్తరించండి',
//       shopName: 'షాప్ పేరు',
//       sellerState: 'విక్రేత రాష్ట్రం',
//       productLanguage: 'ఉత్పత్తి భాష',
//       productCategory: 'ఉత్పత్తి వర్గం',
//     },
//     productDetails: {
//       heading: 'ఉత్పత్తి వివరాలు',
//       subheading: 'మీ ఉత్పత్తి వివరాలను నమోదు చేయండి',
//       productTitle: 'ఉత్పత్తి పేరు',
//       productTitleLabel: "ఇక్కడ మీ ఉత్పత్తి శీర్షికను నమోదు చేయండి",
//       pricing: 'ధర',
//       pricingLabel: "మీ ఉత్పత్తి ధరను నమోదు చేయండి",

//     },
//     productDesc: {
//       heading: 'ఉత్పత్తి వివరణ',
//       subheading: 'మీ ఉత్పత్తి వివరాన్ని నమోదు చేయండి',
//       productDescription: 'ఉత్పత్తి వివరణ',
//       productDescriptionLabel: "ఇక్కడ మీ ఉత్పత్తి వివరణను నమోదు చేయండి",
//     },
//     productVari: {
//       heading: 'ఉత్పత్తి వివిధత',
//       subheading: 'మీ ఉత్పత్తి వివిధతను నమోదు చేయండి',
//       productVariation: 'ఉత్పత్తి వివిధత',
//       productVariationLabel: "ఇక్కడ మీ ఉత్పత్తి వివిధతను నమోదు చేయండి",
//     },
//     compLogo: {
//       heading: 'కంపెనీ లోగో',
//       subheading: 'మీ కంపెనీ లోగోను అప్‌లోడ్ చేయండి',
//     },
//     productImg: {
//       heading: 'ఉత్పత్తి చిత్రాలు',
//       subheading: 'మీ ఉత్పత్తి చిత్రాలను అప్‌లోడ్ చేయండి',
//     }
//   },

//   bengali: {
//     "sellerDetails": {
//       "heading": "বিক্রেতার বিবরণ",
//       "subheading": "আপনার ব্যবসার বিস্তার করুন",
//       "shopName": "দোকানের নাম",
//       "sellerState": "বিক্রেতার অবস্থান",
//       "productLanguage": "পণ্যের ভাষা",
//       "productCategory": "পণ্যের বিভাগ"
//     },
//     "productDetails": {
//       "heading": "পণ্যের বিবরণ",
//       "subheading": "আপনার পণ্যের বিবরণ দিন",
//       "productTitle": "পণ্যের নাম",
//       "productTitleLabel": "আপনার পণ্যের শিরোনাম এখানে লিখুন",
//       "pricing": "মূল্য",
//       "pricingLabel": "আপনার পণ্যের মূল্য লিখুন"
//     },
//     "productDesc": {
//       "heading": "পণ্যের বর্ণনা",
//       "subheading": "আপনার পণ্যের তথ্য দিন",
//       "productDescription": "পণ্যের বিবরণ",
//       "productDescriptionLabel": "আপনার পণ্যের বিবরণ এখানে লিখুন"
//     },
//     "productVari": {
//       "heading": "পণ্যের বৈচিত্র্য",
//       "subheading": "আপনার পণ্যের বৈচিত্র্য দিন",
//       "productVariation": "পণ্যের বৈচিত্র্য",
//       "productVariationLabel": "আপনার পণ্যের বৈচিত্র্য লিখুন"
//     },
//     "compLogo": {
//       "heading": "কোম্পানির লোগো",
//       "subheading": "আপনার কোম্পানির লোগো আপলোড করুন"
//     },
//     "productImg": {
//       "heading": "পণ্যের ছবি",
//       "subheading": "আপনার পণ্যের ছবি আপলোড করুন"
//     }
//   }, gujarati: {
//     sellerDetails: {
//       heading: 'વેચકની વિગતો',
//       subheading: 'તમારો વ્યાપાર વિસ્તાર આપો',
//       shopName: 'દુકાનનું નામ',
//       sellerState: 'વેચકનો રાજ્ય',
//       productLanguage: 'ઉત્પાદની ભાષા',
//       productCategory: 'ઉત્પાદ વર્ગ',
//     },
//     productDetails: {
//       heading: 'ઉત્પાદની વિગતો',
//       subheading: 'તમારી ઉત્પાદની વિગતો આપો',
//       productTitle: 'ઉત્પાદ નામ',
//       productTitleLabel: "અહીં તમારો ઉત્પાદ શીર્ષક દાખલ કરો",
//       pricing: 'મૂલ્ય',
//       pricingLabel: "તમારો ઉત્પાદનું મૂલ્ય દાખલ કરો",

//     },
//     productDesc: {
//       heading: 'ઉત્પાદની માહિતી',
//       subheading: 'તમારી ઉત્પાદની માહિતી આપો',
//       productDescription: 'ઉત્પાદની વિવરણ',
//       productDescriptionLabel: "તમારી ઉત્પાદની માહિતી આપો",
//     },
//     productVari: {
//       heading: 'ઉત્પાદની વિવિધતા',
//       subheading: 'તમારી ઉત્પાદની વિવિધતા આપો',
//       productVariation: 'ઉત્પાદની વિવિધતા',
//       productVariationLabel: "તમારી ઉત્પાદની વિવિધતા આપો",
//     },
//     compLogo: {
//       heading: 'કંપનીનો લોગો',
//       subheading: 'તમારો કંપનીનો લોગો અપલોડ કરો',
//     },
//     productImg: {
//       heading: 'ઉત્પાદ છબીઓ',
//       subheading: 'તમારી ઉત્પાદની છબીઓ અપલોડ કરો',
//     }
//   }

// }
