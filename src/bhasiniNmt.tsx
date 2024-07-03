import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
// import Text from "./Text";
// import TextLayer from "./Text";
import TextLayer from "./Textlayer";

export default function Text({ children }) {
  const [translated, setTranslated] = useState(null);

  const axiosApiInstance = axios.create({
    baseURL: "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
  });

  axiosApiInstance.interceptors.request.use(
    async (request) => {
      request.headers.Authorization =
        "ZZiuNxfnJBUTWXXZmxQ7Wm6xk-R7vBZaFIZjf7nse8UXe3Oc4r4B_YW9KMgwZI_M";
      return request;
    },
    (err) => Promise.reject(err)
  );

  const request = async (method, req) => {
    try {
      const response = await axiosApiInstance({
        method,
        url: "https://dhruva-api.bhashini.gov.in/services/inference/pipeline",
        headers: { Accept: "application/json" },
        data: req,
      });
      console.log("response:", response.data);
      return response.data;
    } catch (error) {
      if (error?.response?.status === 401) {
        Alert.alert("Oops", "User session time out");
      } else {
        throw error.response;
      }
    }
  };

  const textToTextTranslationNMT = async () => {
    const reqObj = {
      pipelineTasks: [
        {
          taskType: "translation",
          config: {
            language: {
              sourceLanguage: "en",
              targetLanguage: "ta",
            },
            serviceId: "ai4bharat/indictrans-v2-all-gpu--t4",
          },
        },
      ],
      inputData: {
        input: [{ source: children.toString() }],
        audio: [{ audioContent: null }],
      },
    };

    try {
      const responseData = await request("POST", reqObj);
      setTranslated(responseData?.pipelineResponse[0]?.output[0]?.target);
    } catch (error) {
      console.log("textToTextTranslationNMT error:", error);
    }
  };

  useEffect(() => {
    // console.log(children);
    // console.log(typeof children, children);
    // textToTextTranslationNMT();
  }, []);

  return (
    <View style={styles.container}>
      <TextLayer>
        {translated ? translated : children}
        {/* {children} */}
      </TextLayer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
